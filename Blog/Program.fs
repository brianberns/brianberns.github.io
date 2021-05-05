namespace Blog

open Statiq.App
open Statiq.Common
open Statiq.Web

module Program =

    [<EntryPoint>]
    let main argv =
        Bootstrapper
            .Factory
            .CreateWeb(argv)
            .ConfigureEngine(fun eng ->
                eng.FileSystem.OutputPath <- NormalizedPath("docs"))
            .RunAsync()
            |> Async.AwaitTask
            |> Async.RunSynchronously
