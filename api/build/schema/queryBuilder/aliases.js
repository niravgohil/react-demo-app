"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.tableAliases = exports.columnAliases = void 0;

// If foreign key doesn't follow le `${singlar(table)}_id` naming convention
const columnAliases = {
  created_by: 'created_by',
  assigned_to: 'assigned_to' };


// Mapping cross tables & aliases to the correct table
exports.columnAliases = columnAliases;const tableAliases = {
  // stages: 'lead_stages',
};exports.tableAliases = tableAliases;
//# sourceMappingURL=aliases.js.map
