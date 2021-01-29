const shell = require('shelljs')
const { spawn } = require('child_process')

const launch = (commandName, ...args) => {
  const command = `${shell.which(commandName)}`
  const child = spawn(command, args, { detached: true, stdio: 'inherit' })
  return child
}

module.exports = launch
