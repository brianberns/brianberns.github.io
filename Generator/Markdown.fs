﻿namespace Generator

open System
open System.IO

open Markdig
open Markdig.Extensions.Yaml
open Markdig.Renderers
open Markdig.Syntax

open YamlDotNet.Serialization
open YamlDotNet.Serialization.NamingConventions

open DotLiquid

module Markdown =

    /// YAML front matter.
    [<CLIMutable>]
    type private FrontMatter =
        {
            Title : string
        }

    /// Reads contents of the given file.
    // https://stackoverflow.com/questions/9759697/reading-a-file-used-by-another-process
    let private readFile path =
        use stream =
            new FileStream(
                path,
                FileMode.Open,
                FileAccess.Read,
                FileShare.ReadWrite)
        use reader = new StreamReader(stream)
        reader.ReadToEnd()

    /// Liquid HTML template.
    let private template =
        readFile "Template.liquid"
            |> Template.Parse

    /// Markdown pipeline.
    let private pipeline =
        MarkdownPipelineBuilder()
            .UseYamlFrontMatter()
            .UseAdvancedExtensions()
            .UseSmartyPants()
            .ConfigureNewLine(Environment.NewLine)
            .Build()

    /// YAML deserializer.
    let private yamlDeserializer =
        DeserializerBuilder()
            .WithNamingConvention(CamelCaseNamingConvention.Instance)
            .Build()

    /// Generates HTML from the given markdown file.
    let generate htmlDirPath (mdFile : FileInfo) =

            // parse markdown source
        let md = readFile mdFile.FullName
        let doc = Markdown.Parse(md, pipeline)

            // extract yaml
        let title =
            doc.Descendants<YamlFrontMatterBlock>()
                |> Seq.tryExactlyOne
                |> Option.map (fun yamlBlock ->
                    let frontMatter =
                        md
                            .[yamlBlock.Span.Start .. yamlBlock.Span.End]
                            .Replace("---", "")
                            |> yamlDeserializer.Deserialize<FrontMatter>
                    frontMatter.Title)
                |> Option.defaultValue "Blog"

            // generate HTML body
        let body =
            use writer = new StringWriter()
            let renderer = HtmlRenderer(writer)
            pipeline.Setup(renderer)
            renderer.Render(doc) |> ignore
            writer.ToString()

            // render Liquid template
        let html =
            {| title = title; body = body |}
                |> Hash.FromAnonymousObject
                |> template.Render

            // save file
        use writer =
            let htmlFileName =
                $"{Path.GetFileNameWithoutExtension(mdFile.Name)}.html"
            let htmlFilePath =
                Path.Combine(htmlDirPath, htmlFileName)
            new StreamWriter(
                htmlFilePath,
                append = false,
                encoding = Text.Encoding.UTF8)
        writer.Write(html)
