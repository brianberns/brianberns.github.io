open System.IO
open Markdig

let markdownDirPath = @"..\..\..\..\Markdown"
let htmlDirPath = @"..\..\..\..\docs"

[<EntryPoint>]
let main argv =
    for mdFile in DirectoryInfo(markdownDirPath).EnumerateFiles() do
        let md =
            use rdr = new StreamReader(mdFile.FullName)
            rdr.ReadToEnd()
        let html = Markdown.ToHtml(md)
        use wtr =
            let htmlFileName =
                $"{Path.GetFileNameWithoutExtension(mdFile.Name)}.html"
            let htmlFilePath =
                Path.Combine(htmlDirPath, htmlFileName)
            new StreamWriter(htmlFilePath)
        wtr.Write(html)
    0
