const { CheckNpmInstall, CheckYarnInstall, CheckPackageInstall } = require('../build/main')

CheckNpmInstall().then(res => {
  console.log('npm', res)
})

CheckYarnInstall().then(res => {
  console.log('yarn', res)
})

CheckPackageInstall('node --version').then(res => {
  console.log('node', res)
})
