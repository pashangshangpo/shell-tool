import Shell from 'shelljs';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import { basename, join } from 'path';
import { Path } from 'node-tool';

var Exec = function Exec(shell, options) {
  return new Promise(function (resolve) {
    Shell.exec(shell, _objectSpread({
      silent: true
    }, options), function (code) {
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
 * @file 检测包环境
 * @author xiaozhihua
 * @date 2018-12-11 22:47:11
 */
var CheckPackageInstall = function CheckPackageInstall(shell) {
  return Exec(shell).then(function (res) {
    return res.code === 0;
  });
};
var CheckYarnInstall = function CheckYarnInstall() {
  return CheckPackageInstall('yarnpkg --version');
};
var CheckNpmInstall = function CheckNpmInstall() {
  return CheckPackageInstall('npm --version');
};

var Clone =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(gitPath, targetPath) {
    var name, target;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = basename(gitPath).split('.')[0];
            target = join(targetPath, name);
            _context.next = 4;
            return Path.exists(target);

          case 4:
            if (!_context.sent) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", Exec("cd ".concat(target, " && git fetch --all && git reset --hard origin/master")).then(function (res) {
              return _objectSpread({}, res, {
                targetPath: target
              });
            }));

          case 6:
            return _context.abrupt("return", Exec("git clone ".concat(gitPath, " ").concat(target)).then(function (res) {
              return _objectSpread({}, res, {
                targetPath: target
              });
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function Clone(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var git = {
  Clone: Clone
};

/**
 * @file index
 * @author xiaozhihua
 * @date 2018-12-11 22:34:43
 */

export { CheckPackageInstall, CheckYarnInstall, CheckNpmInstall, Shell, Exec, git as Git };
