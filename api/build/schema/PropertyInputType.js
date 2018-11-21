"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.PropertyInputType = exports.fields = void 0;var _graphql = require("graphql");

const fields = {
  id: { type: _graphql.GraphQLID },
  livingSurface: { type: _graphql.GraphQLFloat },
  landSurface: { type: _graphql.GraphQLFloat },
  numberOfRooms: { type: _graphql.GraphQLFloat },
  numberOfParkings: { type: _graphql.GraphQLInt },
  createdAt: { type: _graphql.GraphQLString } };exports.fields = fields;


const PropertyInputType = new _graphql.GraphQLInputObjectType({
  name: 'PropertyInput',
  fields });exports.PropertyInputType = PropertyInputType;
//# sourceMappingURL=PropertyInputType.js.map
