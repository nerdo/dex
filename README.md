# @nerdo/dex

A commmand line utility that finds a running docker container with the closest matching name and executes a command on it.

## Usage

It is recommended to run `dex` with `npx`. For convenience, it might make sense to set up an alias to it on your local system (e.g. `alias dex=npx @nerdo/dex`).

`npx @nerdo/dex <container name> [command]`

`<container name>` can be the partial name of a container and is required.

`[command]` is optional, but defaults to `/bin/bash`. It can consist of a command with any number of arguments, e.g. `npx @nerdo/dex some-container ls -al`.
