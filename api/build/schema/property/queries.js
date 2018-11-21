"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.properties = void 0;

var _graphql = require("graphql");





var _graphqlRelay = require("graphql-relay");
var _resolveList = require("./resolveList");
var _PropertyType = require("../PropertyType");

const { connectionType } = (0, _graphqlRelay.connectionDefinitions)({
  name: 'PropertyConnection',
  nodeType: new _graphql.GraphQLNonNull(_PropertyType.PropertyType),
  connectionFields: {
    totalCount: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) } } });



const properties = {
  type: connectionType,
  args: {
    ..._graphqlRelay.forwardConnectionArgs,
    sortBy: { type: _graphql.GraphQLString },
    sortDirection: { type: _graphql.GraphQLString },
    filters: {
      type: new _graphql.GraphQLInputObjectType({
        name: 'PropertyFilters',
        fields: {
          livingSurface_lte: { type: _graphql.GraphQLInt },
          livingSurface_gte: { type: _graphql.GraphQLInt } } }) } },




  resolve: _resolveList.resolveList };exports.properties = properties;
//# sourceMappingURL=queries.js.map
