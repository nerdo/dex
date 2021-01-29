import { which, exec } from 'shelljs'

const defaultOptions = { silent: true }

export const makeShellFunction = (commandName, overrideOptions = {}) => {
  const options = {
    ...defaultOptions,
    ...(overrideOptions || {})
  }
  const commandPath = which(commandName)
  return (...args) => exec(`${commandPath} ${args.join(' ')}`, options)
}
