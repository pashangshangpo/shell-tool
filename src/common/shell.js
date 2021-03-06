/**
 * @file shell
 * @author xiaozhihua
 * @date 2018-12-12 09:13:49
 */

import Shell from 'shelljs'

export const Exec = (shell, options) => {
  return new Promise(resolve => {
    Shell.exec(
      shell,
      {
        silent: true,
        ...options
      },
      (code, output = '', err = '') => {
        resolve({
          code: code,
          output: output.trim(),
          err: err.trim()
        })
      })
  })
}

export default Shell