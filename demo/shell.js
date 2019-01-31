const { Exec } = require('../build/main')

Exec('node --version').then(res => {
  console.log(res)
})
