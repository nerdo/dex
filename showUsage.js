const showUsage = (commandName) => {
  console.log(`Finds a running docker container with the closest matching name and executes a command.

Usage: ${commandName} <container name> [command]
    - <container name> can be the partial name of a container and is required.
    - [command] is optional, but defaults to /bin/bash. It can consist of a command with any number of arguments (e.g. dex some-container ls -al).
`)
}

module.exports = showUsage
