open System
open System.IO

open Markdig
open Markdig.Extensions.Yaml
open Markdig.Renderers
open Markdig.Syntax

open YamlDotNet.Serialization
open YamlDotNet.Serialization.NamingConventions

open DotLiquid

open Suave

[<CLIMutable>]
type FrontMatter =
    {
        Title : string
    }

let markdownDirPath = @"..\..\..\..\Markdown"
let htmlDirPath = @"..\..\..\..\docs"

let readFile path =
    use rdr = new StreamReader(path : string)
    rdr.ReadToEnd()

let template =
    readFile "Template.liquid"
        |> Template.Parse

let pipeline =
    MarkdownPipelineBuilder()
        .ConfigureNewLine(Environment.NewLine)
        .UseAdvancedExtensions()
        .UseYamlFrontMatter()
        .Build()

let yamlDeserializer =
    DeserializerBuilder()
        .WithNamingConvention(CamelCaseNamingConvention.Instance)
        .Build()

let onFileEvent (_ : FileSystemEventArgs) =

        // delete all existing generated files
    for htmlFile in DirectoryInfo(htmlDirPath).EnumerateFiles("*.html") do
        if not htmlFile.IsReadOnly then
            htmlFile.Delete()

        // regenerate all files
    for mdFile in DirectoryInfo(markdownDirPath).EnumerateFiles("*.md") do

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

[<EntryPoint>]
let main argv =

    use watcher =
        new FileSystemWatcher(
            Path = markdownDirPath,
            Filter = "*.md",
            EnableRaisingEvents = true)
    watcher.Created.Add(onFileEvent)
    watcher.Changed.Add(onFileEvent)
    watcher.Renamed.Add(onFileEvent)
    watcher.Deleted.Add(onFileEvent)

    let config =
        DirectoryInfo(htmlDirPath)
            .FullName
            |> Some
            |> defaultConfig.withHomeFolder
    startWebServer config Files.browseHome

    0
