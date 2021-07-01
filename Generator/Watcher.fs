namespace Generator

open System.IO

module Watcher =

    /// Deletes all existing generated files.
    let deleteAll (htmlDir : DirectoryInfo) =
        for htmlFile in htmlDir.EnumerateFiles("*.html") do
            if not htmlFile.IsReadOnly then
                htmlFile.Delete()

    /// Generates all files.
    let generateAll htmlDir (mdDir : DirectoryInfo) =
        for mdFile in mdDir.EnumerateFiles("*.md") do
            Markdown.generate htmlDir mdFile

    /// Deletes the HTML file corresponding to the given markdown
    /// file.
    let delete htmlDir mdFile =
        let htmlFile = Markdown.getHtmlFile htmlDir mdFile
        htmlFile.Delete()

    /// Markdown file extension.
    let private mdExt = ".md"

    /// A file has been created.
    let onCreated htmlDir (args : FileSystemEventArgs) =
        assert(args.FullPath.EndsWith(mdExt))
        let mdFile = FileInfo(args.FullPath)
        printfn "Markdown file created: %s" mdFile.Name
        Markdown.generate htmlDir mdFile

    /// A file has been changed.
    let onChanged htmlDir (args : FileSystemEventArgs) =
        assert(args.FullPath.EndsWith(mdExt))
        let mdFile = FileInfo(args.FullPath)
        printfn "Markdown file changed: %s" mdFile.Name
        Markdown.generate htmlDir mdFile

    /// A file has been renamed.
    let onRenamed htmlDir (args : RenamedEventArgs) =
        if args.OldFullPath.EndsWith(mdExt) then
            let mdFile = FileInfo(args.OldFullPath)
            printfn "Markdown file renamed from: %s" mdFile.Name
            delete htmlDir mdFile
        if args.FullPath.EndsWith(mdExt) then
            let mdFile = FileInfo(args.FullPath)
            printfn "Markdown file renamed to: %s" mdFile.Name
            Markdown.generate htmlDir mdFile

    /// A file has been deleted.
    let onDeleted htmlDir (args : FileSystemEventArgs) =
        assert(args.FullPath.EndsWith(mdExt))
        let mdFile = FileInfo(args.FullPath)
        printfn "Markdown file deleted: %s" mdFile.Name
        delete htmlDir mdFile

    let watch (htmlDir : DirectoryInfo) (mdDir : DirectoryInfo) =

            // initialize
        deleteAll htmlDir
        generateAll htmlDir mdDir

            // start watcher
        let watcher =
            new FileSystemWatcher(
                Path = mdDir.FullName,
                Filter = $"*{mdExt}",
                EnableRaisingEvents = true)
        watcher.Created.Add(onCreated htmlDir)
        watcher.Changed.Add(onChanged htmlDir)
        watcher.Renamed.Add(onRenamed htmlDir)
        watcher.Deleted.Add(onDeleted htmlDir)
        watcher
