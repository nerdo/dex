# @nerdo/dex

A commmand line utility that finds a running docker container with the closest matching name and executes a command on it.

## Installation

`npm i -g @nerdo/dex`

## Usage

`dex <container name> [command]`

`<container name>` can be the partial name of a container and is required.

`[command]` is optional, but defaults to `/bin/bash`. It can consist of a command with any number of arguments, e.g. `dex some-container ls -al`.
