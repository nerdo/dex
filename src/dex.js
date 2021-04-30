import { makeShellFunction } from './makeShellFunction'
import { launch } from './launch'

export const dex = (...args) => {
  const docker = makeShellFunction('docker')
  const containerNameQuery = args[0]
  const names = docker('ps', '-f', `name='${containerNameQuery}'`, '--format', '{{.Names}}')
    .split('\n')
    .filter(s => s.length)
  if (!names.length) {
    console.error(`no container found matching the name "${containerNameQuery}"`)
    return 1
  }

  const containerArgs = args.length > 1 ? args.slice(1) : ['/bin/bash']
  launch('docker', 'exec', '-it', names[0], ...containerArgs)
}
