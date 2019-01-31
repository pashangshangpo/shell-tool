/**
 * @file git
 * @author xiaozhihua
 * @date 2018-12-12 22:12:10
 */

import { basename, join } from 'path'
import { Path } from '@xiaozhihua/node-tool'
import { Exec } from './shell'

const Clone = async (gitPath, targetPath) => {
  let name = basename(gitPath).split('.')[0]
  let target = join(targetPath, name)

  if (await Path.exists(target)) {
    return Exec(
      `cd ${target} && git fetch --all && git reset --hard origin/master`
    ).then(res => {
      return {
        ...res,
        targetPath: target,
      }
    })
  }

  return Exec(`git clone ${gitPath} ${target}`).then(res => {
    return {
      ...res,
      targetPath: target,
    }
  })
}

export default {
  Clone,
}
