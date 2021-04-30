#!/usr/bin/env node

import { dex } from './dex'
import { getArgs } from './getArgs'
import { showUsage } from './showUsage'

const args = getArgs()
if (args.length >= 1) {
  dex(...getArgs())
} else {
  showUsage('dex')
}
