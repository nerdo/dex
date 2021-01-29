const shell = require('shelljs')

const defaultOptions = { silent: true }

const makeShellFunction = (commandName, overrideOptions = {}) => {
  const options = {
    ...defaultOptions,
    ...(overrideOptions || {})
  }
  const commandPath = shell.which(commandName)
  return (...args) => shell.exec(`${commandPath} ${args.join(' ')}`, options)
}

module.exports = makeShellFunction
