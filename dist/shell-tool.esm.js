import Shell from 'shelljs';

/**
 * @file 检测包环境
 * @author xiaozhihua
 * @date 2018-12-11 22:47:11
 */
var CheckPackageInstall = function CheckPackageInstall(shell) {
  return new Promise(function (resolve) {
    Shell.exec(shell, {
      silent: true
    }, function (code) {
      resolve(code === 0);
    });
  });
};
var CheckYarnInstall = function CheckYarnInstall() {
  return CheckPackageInstall('yarnpkg --version');
};
var CheckNpmInstall = function CheckNpmInstall() {
  return CheckPackageInstall('npm --version');
};

/**
 * @file shell
 * @author xiaozhihua
 * @date 2018-12-12 09:13:49
 */
var Exec = function Exec(shell) {
  return new Promise(function (resolve) {
    Shell.exec(shell, {
      silent: true
    }, function (code) {
      var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var err = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      resolve({
        code: code,
        output: output.trim(),
        err: err.trim()
      });
    });
  });
};

/**
 * @file index
 * @author xiaozhihua
 * @date 2018-12-11 22:34:43
 */

export { CheckPackageInstall, CheckYarnInstall, CheckNpmInstall, Exec };
