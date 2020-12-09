
const path = require('path')
// const fs = require('fs-extra')
async function create (projectName, options) {
    console.log(projectName, options)
    const cwd = process.cwd(); // 获取当前命令执行时的工作目录
    const targetDir = path.join(cwd,projectName); // 目标目录
    console.log(targetDir)
}

module.exports = (...args) => {
    return create(...args)
}