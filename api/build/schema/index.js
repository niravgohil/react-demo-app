"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _graphql = require("graphql");

var _node = require("./node");
var _queries = require("./property/queries");

var _mutations = require("./property/mutations");var _default =

new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      node: _node.nodeField,
      nodes: _node.nodesField,
      properties: _queries.properties }) }),



  mutation: new _graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      upsertProperty: _mutations.upsertProperty,
      deleteProperty: _mutations.deleteProperty }) }) });exports.default = _default;
//# sourceMappingURL=index.js.map
