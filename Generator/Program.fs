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
open Suave.Operators

/// YAML front matter.
[<CLIMutable>]
type FrontMatter =
    {
        Title : string
    }

/// Path to directory containing source markdown files.
let markdownDirPath = @"..\..\..\..\Markdown"

/// Path to directory containing generated HTML files.
let htmlDirPath = @"..\..\..\..\docs"

/// Reads contents of the given file.
// https://stackoverflow.com/questions/9759697/reading-a-file-used-by-another-process
let readFile path =
    use stream = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite)
    use reader = new StreamReader(stream)
    reader.ReadToEnd()

/// Liquid HTML template.
let template =
    readFile "Template.liquid"
        |> Template.Parse

/// Markdown pipeline.
let pipeline =
    MarkdownPipelineBuilder()
        .UseYamlFrontMatter()
        .UseAdvancedExtensions()
        .UseSmartyPants()
        .ConfigureNewLine(Environment.NewLine)
        .Build()

/// YAML deserializer.
let yamlDeserializer =
    DeserializerBuilder()
        .WithNamingConvention(CamelCaseNamingConvention.Instance)
        .Build()

/// Responds to a file system event.
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

        // initialize file system watcher
    use watcher =
        new FileSystemWatcher(
            Path = markdownDirPath,
            Filter = "*.md",
            EnableRaisingEvents = true)
    watcher.Created.Add(onFileEvent)
    watcher.Changed.Add(onFileEvent)
    watcher.Renamed.Add(onFileEvent)
    watcher.Deleted.Add(onFileEvent)

        // start web server
    let config =
        DirectoryInfo(htmlDirPath)
            .FullName
            |> Some
            |> defaultConfig.withHomeFolder
    let app =
        Filters.GET >=> 
            choose [
                Filters.path "/" >=> Files.browseFileHome "index.html"
                Files.browseHome
                RequestErrors.NOT_FOUND "Page not found."
            ]
    startWebServer config app

    0
