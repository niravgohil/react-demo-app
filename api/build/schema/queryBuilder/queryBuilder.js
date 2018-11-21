"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = queryBuilder;

var _graphqlRelay = require("graphql-relay");
var _whereClauseBuilder = require("./whereClauseBuilder.js");
var _sortingBuilder = require("./sortingBuilder.js"); /* eslint-disable no-nested-ternary */
















function queryBuilder(params) {
  const {
    ctx,
    args,
    table,
    prepareTotalCount = true,
    prepareCountOnly = false,
    prepareLimit = true,
    cursorToOffset = _graphqlRelay.cursorToOffset,
    defaultSortBy,
    stableSortBy } =
  params;
  const { db } = params.ctx;

  // TODO: move limit offset logic out of queryBuilder
  const limit = typeof args.first === 'undefined' ? '10' : args.first;
  const offset = args.after ? cursorToOffset(args.after) + 1 : 0;

  const query =
  params.query ||
  db.
  select(
  prepareCountOnly ?
  db.raw('count(*)::int as total_count') :
  prepareTotalCount ?
  [`${table}.*`, db.raw('count(*) OVER() AS total_count')] :
  [`${table}.*`]).

  from(table);

  // Filters
  if (args.filters) {
    const customFiltersKeys = params.filters ? Object.keys(params.filters) : [];

    Object.keys(args.filters).
    filter(filter => !customFiltersKeys.includes(filter)).
    forEach(filter => {
      (0, _whereClauseBuilder.whereClauseBuilder)({
        ctx,
        query,
        table,
        key: filter,
        value: args.filters[filter] });

    });

    // Custom filters
    if (params.filters) {
      const customFilters = params.filters;
      Object.keys(args.filters).
      filter(filter => customFiltersKeys.includes(filter)).
      forEach(filter => {
        customFilters[filter]({
          value: args.filters[filter],
          query,
          db });

      });
    }
  }

  if (prepareCountOnly) {
    query.first();
    return { query, limit, offset };
  }

  // Sort and sort direction
  const sortDirection = args.sortDirection ?
  db.raw(`${args.sortDirection} NULLS LAST`) :
  db.raw('ASC NULLS LAST');

  if (args.sortBy) {
    const customSortBy = params.sortBy;
    // Custom sortBy logic
    if (customSortBy && customSortBy[args.sortBy]) {
      customSortBy[args.sortBy]({
        query,
        sortDirection,
        sortingBuilder: _sortingBuilder.sortingBuilder });

    } else {
      (0, _sortingBuilder.sortingBuilder)({
        query,
        table,
        sortBy: args.sortBy,
        sortDirection: sortDirection.toString() });

    }
  } else if (defaultSortBy) {
    defaultSortBy({ query });
  } else {
    query.orderBy(`${table}.created_at`, 'desc');
  }

  // stable sorting
  if (stableSortBy) {
    stableSortBy({ query });
  } else {
    query.orderBy(`${table}.id`, 'asc');
  }

  if (prepareLimit) {
    query.limit(limit).offset(offset);
  }

  return { query, limit, offset };
}
//# sourceMappingURL=queryBuilder.js.map
