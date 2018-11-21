"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.deleteMutationBuilder = void 0;

var _assert = _interopRequireDefault(require("assert"));

var _whereClauseBuilder = require("./whereClauseBuilder.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}







const deleteMutationBuilder = params => {
  const { ctx, input, table } = params;
  const { db } = ctx;
  const query = db.table(table).delete();

  (0, _assert.default)(
  typeof input.where === 'object' && input.where != null,
  'input.where in delete mutation should be an object');


  Object.keys(input.where).forEach(whereKey => {
    (0, _whereClauseBuilder.whereClauseBuilder)({
      ctx,
      query,
      table,
      key: whereKey,
      value: input.where[whereKey] });

  });

  return { query };
};exports.deleteMutationBuilder = deleteMutationBuilder;
//# sourceMappingURL=deleteMutationBuilder.js.map
