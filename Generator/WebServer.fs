namespace Generator

open System.IO

open Suave
open Suave.Operators

module WebServer =

    /// Starts the web server.
    let start (htmlDir : DirectoryInfo) =

            // start web server
        let config =
            htmlDir.FullName
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
