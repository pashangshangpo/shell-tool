/**
 * @file 检测包环境
 * @author xiaozhihua
 * @date 2018-12-11 22:47:11
 */

import { Exec } from './shell'

export const CheckPackageInstall = shell => {
  return Exec(shell).then(res => res.code === 0)
}

export const CheckYarnInstall = () => {
  return CheckPackageInstall('yarnpkg --version')
}

export const CheckNpmInstall = () => {
  return CheckPackageInstall('npm --version')
}
