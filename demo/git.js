const {
  Path
} = require('../node_modules/@xiaozhihua/node-tool/build/main')
const {
  Git
} = require('../build/main')

Git.Clone(
  'https://github.com/wee911/test1.git',
  Path.joinApp('./demo/node_modules'),
  'master'
).then(res => {
  console.log(res)
})