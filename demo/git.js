const {
  Path
} = require('../node_modules/@xiaozhihua/node-tool/build/main')
const {
  Git
} = require('../build/main')

Git.Clone(
  'https://github.com/wee911/test1.git',
  Path.joinApp('node_modules'),
  'dev'
).then(res => {
  console.log(res)
})