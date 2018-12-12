const { Exec } = require('../dist/shell-tool.cjs')

Exec('node --version').then(res => {
  console.log(res)
})
