/**
 * @file 检测包环境
 * @author xiaozhihua
 * @date 2018-12-11 22:47:11
 */

import Shell from 'shelljs'

export const CheckPackageInstall = shell => {
  return new Promise(resolve => {
    Shell.exec(shell, {silent: true}, code => {
      resolve(code === 0)
    })
  })
}

export const CheckYarnInstall = () => {
  return CheckPackageInstall('yarnpkg --version')
}

export const CheckNpmInstall = () => {
  return CheckPackageInstall('npm --version')
}
