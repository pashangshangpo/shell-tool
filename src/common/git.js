/**
 * @file git
 * @author xiaozhihua
 * @date 2018-12-12 22:12:10
 */

import { Path } from '@xiaozhihua/node-tool'
import { basename, join } from 'path'
import { Exec } from './shell'

const Clone = async (gitPath, targetPath, branch = 'master') => {
  let name = basename(gitPath).split('.')[0]
  let target = join(targetPath, name)
  if (await Path.exists(target)) {
    const branches = await Exec(`cd ${target} && git branch | cut -c 3-`)
    const branchExists = branches.output.split('\n').includes(branch)
    return Exec(
      `cd ${target} && git checkout ${!branchExists ? '-b' : ''} ${branch} && git fetch && git reset --hard origin/${branch}`
    ).then(res => {
      return {
        ...res,
        targetPath: target,
      }
    })
  }

  return Exec(`git clone -b ${branch} ${gitPath} ${target}`).then(res => {
    return {
      ...res,
      targetPath: target,
    }
  })
}

export default {
  Clone,
}
