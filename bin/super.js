#! /usr/bin/env node

console.log(1)
const program = require('commander')

program
    .command('create <app-name>')
    .description('create a new project')
    .option('-f, --force', 'Overwrite target directory if it exists')
    .option('-c, --clone', 'Use git clone when fetching remote preset')
    .action((name, cmd) => {
        const options = cleanArgs(cmd)
        console.log(options)
        require('../lib/create')(name, options)
    })
function camelize (str) {
    return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}
function cleanArgs (cmd) {
    const args = {}
    // console.log(cmd)
    cmd.options.forEach(o => {
        const key = camelize(o.long.replace(/^--/, ''))
        // console.log(key)
        // console.log(cmd[key])
        // console.log(typeof cmd[key])
        if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
            args[key] = cmd[key]
        }
    })
    return args
}
program
    .parse(process.argv)