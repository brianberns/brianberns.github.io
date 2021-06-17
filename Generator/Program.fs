open System.IO
open Markdig
open DotLiquid

let markdownDirPath = @"..\..\..\..\Markdown"
let htmlDirPath = @"..\..\..\..\docs"

let readFile path =
    use rdr = new StreamReader(path : string)
    rdr.ReadToEnd()

[<EntryPoint>]
let main argv =

    let template =
        readFile "Template.liquid"
            |> Template.Parse

    for mdFile in DirectoryInfo(markdownDirPath).EnumerateFiles() do
        let md = readFile mdFile.FullName
        let html =
            {| body = Markdown.ToHtml(md) |}
                |> Hash.FromAnonymousObject
                |> template.Render
        use wtr =
            let htmlFileName =
                $"{Path.GetFileNameWithoutExtension(mdFile.Name)}.html"
            let htmlFilePath =
                Path.Combine(htmlDirPath, htmlFileName)
            new StreamWriter(htmlFilePath)
        wtr.Write(html)

    0
