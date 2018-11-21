"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.resolveList = void 0;


var _queryBuilder = require("../queryBuilder");





const resolveList = async function resolve(
root,
args,
ctx)
{
  const { query } = (0, _queryBuilder.queryBuilder)({
    ctx,
    args,
    table: 'properties',
    cursorToOffset: _queryBuilder.cursorToOffset,
    defaultSortBy: ({ query: dbQuery }) => {
      dbQuery.orderBy('properties.created_at', 'desc');
    } });


  return (0, _queryBuilder.connectionFromArray)((await query), args);
};exports.resolveList = resolveList;
//# sourceMappingURL=resolveList.js.map
