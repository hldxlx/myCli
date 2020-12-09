## https://www.jianshu.com/p/75de24392de8 模仿vue-cli，手写一个脚手架
## npm init -y
## 在pageage.json加 "bin": "./bin/super.js", 新建bin文件夹，在下面建super.js文件
## npm link
## super.js
#! /usr/bin/env node

console.log(1)
const program = require('commander')

program
    .version(`Version is ${require('../package.json').version}`)
    .description('从0开始 手写脚手架')
    .usage('<command> [options]')

program
    .parse(process.argv)
## cli -V
## cli -h
    