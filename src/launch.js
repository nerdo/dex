import { which } from 'shelljs'
import { spawn } from 'child_process'

export const launch = (commandName, ...args) => {
  const command = `${which(commandName)}`
  const child = spawn(command, args, { detached: true, stdio: 'inherit' })
  return child
}
