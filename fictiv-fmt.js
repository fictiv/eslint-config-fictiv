#!/usr/bin/env node

require('prettier-eslint-cli/dist/add-exception-handler') // want to do this first
const getLogger = require('loglevel-colored-level-prefix')
const parser = require('prettier-eslint-cli/dist/parser')
const formatFiles = require('prettier-eslint-cli/dist/format-files')

const prettierOptions = require('./prettierOptions')

const logger = getLogger({ prefix: 'fictiv-fmt' })
const args = process.argv.slice(2)

logger.trace('Parsing args: ', args)
const argv = parser.parse(args)

formatFiles(Object.assign({}, prettierOptions, argv))