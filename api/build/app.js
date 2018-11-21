"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _compression = _interopRequireDefault(require("compression"));
var _expressGraphql = _interopRequireDefault(require("express-graphql"));
var _schema = _interopRequireDefault(require("./schema"));
var _Context = require("./Context");
var _db_ = _interopRequireDefault(require("./db_"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                   * Copyright © 2016-present Kriasoft.
                                                                                                                                                   *
                                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                                   */const app = (0, _express.default)();app.set('trust proxy', 1);
app.use(
(0, _cors.default)((req, callback) => {
  callback(null, {
    origin: true,
    credentials: true,
    maxAge: 60 * 5 });

}));


app.use((0, _compression.default)());

// Health check endpoint (see the load balancer settings)
app.get('/check', (req, res) => {
  res.type('text/plain').send('OK');
});

app.use(
'/graphql',
(0, _expressGraphql.default)(req => ({
  schema: _schema.default,
  context: new _Context.Context(req, _db_.default),
  graphiql: true, // process.env.GCP_PROJECT !== '<name>',
  pretty: false,
  formatError: err => {
    console.error(err.originalError || err); // eslint-disable-line no-console
    return {
      message: err.message,
      code: err.originalError && err.originalError.code,
      state: err.originalError && err.originalError.state,
      locations: err.locations,
      path: err.path };

  } })));



app.use((err, req, res, next) => {
  console.error(err); // eslint-disable-line no-console

  if (res.headersSent) {
    next(err);
    return;
  }

  res.status(500).send(err && err.message || 'API error.');
});var _default =

app;exports.default = _default;
//# sourceMappingURL=app.js.map
