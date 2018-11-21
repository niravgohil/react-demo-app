"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


require("./env");
var _app = _interopRequireDefault(require("./app"));
var _db_ = _interopRequireDefault(require("./db_"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /* eslint-disable no-console, no-shadow, import/first */

const port = process.env.PORT || 8080;

const server = _app.default.listen(port, () => {
  console.log(`API is listening on http://localhost:${port}/`);
});

function handleExit(options, err) {
  if (options.cleanup) {
    const actions = [server.close, _db_.default.destroy];
    actions.forEach((close, i) => {
      try {
        close(() => {
          if (i === actions.length - 1) process.exit();
        });
      } catch (err) {
        if (i === actions.length - 1) process.exit();
      }
    });
  }
  if (err) console.error(err);
  if (options.exit) process.exit();
}

process.on('exit', handleExit.bind(null, { cleanup: true }));
process.on('SIGINT', handleExit.bind(null, { exit: true }));
process.on('SIGTERM', handleExit.bind(null, { exit: true }));
process.on('uncaughtException', handleExit.bind(null, { exit: true }));var _default =

server;exports.default = _default;
//# sourceMappingURL=server.js.map
