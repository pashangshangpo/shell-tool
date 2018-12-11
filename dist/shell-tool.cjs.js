'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Shell = _interopDefault(require('shelljs'));

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
 * @file index
 * @author xiaozhihua
 * @date 2018-12-11 22:34:43
 */

exports.CheckPackageInstall = CheckPackageInstall;
exports.CheckYarnInstall = CheckYarnInstall;
exports.CheckNpmInstall = CheckNpmInstall;
