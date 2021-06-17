open System
open System.IO

open Markdig
open DotLiquid
open Suave

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
        .Build()

let onFileEvent (args : FileSystemEventArgs) =

    for htmlFile in DirectoryInfo(htmlDirPath).EnumerateFiles("*.html") do
        htmlFile.Delete()

    for mdFile in DirectoryInfo(markdownDirPath).EnumerateFiles("*.md") do
        let md = readFile mdFile.FullName
        let html =
            {| body = Markdown.ToHtml(md, pipeline) |}
                |> Hash.FromAnonymousObject
                |> template.Render
        use wtr =
            let htmlFileName =
                $"{Path.GetFileNameWithoutExtension(mdFile.Name)}.html"
            let htmlFilePath =
                Path.Combine(htmlDirPath, htmlFileName)
            new StreamWriter(htmlFilePath)
        wtr.Write(html)

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
