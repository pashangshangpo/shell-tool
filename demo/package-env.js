const { CheckNpmInstall, CheckYarnInstall, CheckPackageInstall } = require('../dist/shell-tool.cjs')

CheckNpmInstall().then(res => {
  console.log('npm', res)
})

CheckYarnInstall().then(res => {
  console.log('yarn', res)
})

CheckPackageInstall('node --version').then(res => {
  console.log('node', res)
})
