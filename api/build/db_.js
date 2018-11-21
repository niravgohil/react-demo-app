"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.listingsDb = exports.default = void 0;








var _knex = _interopRequireDefault(require("knex"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                   * Copyright © 2016-present Kriasoft.
                                                                                                                                                   *
                                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                                   */const db = (0, _knex.default)({ client: 'pg', connection: {}, migrations: {
    tableName: 'migrations' },

  debug: process.env.PGDEBUG === 'true' });var _default =


db;exports.default = _default;

const listingsDb = (0, _knex.default)({
  client: 'pg',
  connection: {
    host: process.env.PG_LISTINGS_HOST,
    user: process.env.PG_LISTINGS_USER,
    password: process.env.PG_LISTINGS_PASSWORD,
    database: process.env.PG_LISTINGS_DATABASE },

  debug: process.env.PGDEBUG === 'true' });exports.listingsDb = listingsDb;
//# sourceMappingURL=db_.js.map
