"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.connectionFromArray = exports.cursorToOffset = exports.parseCursor = void 0;

var _base = require("graphql-relay/lib/utils/base64");

const parseCursor = (
  cursor
) => {
  if (cursor == null) {
    return {
      offset: -1 };

  }

  return JSON.parse((0, _base.unbase64)(cursor));
};exports.parseCursor = parseCursor;

const cursorToOffset = cursor => parseCursor(cursor).offset;exports.cursorToOffset = cursorToOffset;

const offsetToCursor = (offset, totalCount) => {
  const cursor = { offset, totalCount };
  const cursorStr = JSON.stringify(cursor);
  return (0, _base.base64)(cursorStr);
};

const connectionFromArray = (
arr,
args) =>
{
  if (arr.length > args.first) {
    throw new Error('Data array must be less or equal to first property');
  }

  const { offset, totalCount } = parseCursor(args.after);

  const currTotalCount =
  (totalCount != null ?
  totalCount :
  arr.length && parseInt(arr[0].total_count, 10)) || 0;

  const startOffset = offset + 1;

  const edges = arr.map(
  (node, index) => ({
    cursor: offsetToCursor(startOffset + index, currTotalCount),
    node }));



  const firstEdge = edges[0];
  const lastEdge = edges[edges.length - 1];

  return {
    edges,
    pageInfo: {
      startCursor: firstEdge ? firstEdge.cursor : null,
      endCursor: lastEdge ? lastEdge.cursor : null,
      hasPreviousPage: offset > -1,
      hasNextPage: startOffset + arr.length < currTotalCount - 1 },

    totalCount: currTotalCount };

};exports.connectionFromArray = connectionFromArray;
//# sourceMappingURL=cursor.js.map
