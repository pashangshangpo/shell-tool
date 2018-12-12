/**
 * @file git
 * @author xiaozhihua
 * @date 2018-12-12 22:12:10
 */

import { Exec } from './shell'

const Clone = (gitPath, targetPath) => {
  return Exec(`git clone ${gitPath} ${targetPath}`)
}

export default {
  Clone
}
