namespace Generator

open System.IO

module Program =

    /// Directory containing source markdown files.
    let mdDir = @"..\..\..\..\Markdown" |> DirectoryInfo

    /// Directory containing generated HTML files.
    let htmlDir = @"..\..\..\..\docs" |> DirectoryInfo

    [<EntryPoint>]
    let main argv =
        use watcher = Watcher.watch htmlDir mdDir
        WebServer.start htmlDir
        0
