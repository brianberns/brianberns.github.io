namespace Generator

open System.IO

module Program =

    /// Path to directory containing source markdown files.
    let markdownDirPath = @"..\..\..\..\Markdown"

    /// Path to directory containing generated HTML files.
    let htmlDirPath = @"..\..\..\..\docs"

    /// Responds to a file system event.
    let onFileEvent (_ : FileSystemEventArgs) =

            // delete all existing generated files
        for htmlFile in DirectoryInfo(htmlDirPath).EnumerateFiles("*.html") do
            if not htmlFile.IsReadOnly then
                htmlFile.Delete()

            // regenerate all files
        for mdFile in DirectoryInfo(markdownDirPath).EnumerateFiles("*.md") do
            Markdown.generate htmlDirPath mdFile

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

        WebServer.start htmlDirPath

        0
