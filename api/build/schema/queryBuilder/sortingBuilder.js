"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.sortingBuilder = void 0;

var _pluralize = _interopRequireDefault(require("pluralize"));
var _utils = require("./utils.js");
var _aliases = require("./aliases.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const { singular } = _pluralize.default;








/*
                                          * Sort values examples
                                          * values are splitted with pipe operator
                                          *
                                          * createdBy_firstName|createdBy_lastName
                                          * broker_firstName|broker_lastName
                                          * property_propertyType_name
                                          * stage_order_nr|stage_pipeline_id
                                          * property_numberOfRooms|property_numberOfBathrooms
                                          * property_livingSurface|property_landSurface
                                          */

const sortByBuilder = params => {
  const keys = params.sortBy.split('_');
  const tables = [
  params.table,
  ...keys.slice(0, -1).map(t => (0, _pluralize.default)((0, _utils.toSnakeCase)(t)))];

  const field = (0, _utils.toSnakeCase)(keys[keys.length - 1]);

  let lastAlias = tables[0];

  tables.forEach((currTable, index) => {
    if (index !== 0) {
      const pluralCurrTable = _aliases.tableAliases[currTable] || currTable;
      const prevTableColumn =
      _aliases.columnAliases[singular(currTable)] || `${singular(currTable)}_id`;
      const currTableAlias = `__sorting_${params.pipedIndex}_${index}__`;
      params.query.joinRaw(
      `LEFT JOIN ${pluralCurrTable} AS ${currTableAlias}` +
      ` ON ${lastAlias}.${prevTableColumn}=${currTableAlias}.id`);

      lastAlias = currTableAlias;
    }
  });

  params.query.orderByRaw(`${lastAlias}.${field} ${params.sortDirection}`);
};

const sortingBuilder = (params) =>
params.sortBy.split('|').forEach((item, index) =>
sortByBuilder({
  query: params.query,
  pipedIndex: index,
  table: params.table,
  sortBy: item,
  sortDirection: params.sortDirection }));exports.sortingBuilder = sortingBuilder;
//# sourceMappingURL=sortingBuilder.js.map
