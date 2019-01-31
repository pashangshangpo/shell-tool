const { Path } = require('node-tool')
const { Git } = require('../build/main')

Git.Clone(
  'https://github.com/pashangshangpo/peak-mock.git',
  Path.joinApp('demo/node_modules')
).then(res => {
  console.log(res)
})