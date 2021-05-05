namespace Blog

open Statiq.App
open Statiq.Web

module Program =

    [<EntryPoint>]
    let main argv =
        Bootstrapper
            .Factory
            .CreateWeb(argv)
            .RunAsync()
            |> Async.AwaitTask
            |> Async.RunSynchronously
