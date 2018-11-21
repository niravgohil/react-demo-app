"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.deleteProperty = exports.upsertProperty = void 0;

var _graphql = require("graphql");
var _graphqlRelay = require("graphql-relay");

var _PropertyType = require("../PropertyType");
var _PropertyInputType = require("../PropertyInputType");
var _upsertProperty = _interopRequireDefault(require("./upsertProperty"));
var _validate = _interopRequireDefault(require("./validate"));
var _utils = require("../utils");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


const upsertProperty = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'UpsertProperty',
  description: 'Upsert a property',
  inputFields: {
    property: { type: new _graphql.GraphQLNonNull(_PropertyInputType.PropertyInputType) } },

  outputFields: {
    property: { type: _PropertyType.PropertyType } },

  async mutateAndGetPayload(input, ctx) {
    const property = await (0, _validate.default)(input.property, ctx);

    // upsert Property
    const upsertedProperty = await (0, _upsertProperty.default)(
    property,
    null,
    ctx);


    return ctx.properties.
    load(upsertedProperty.id).
    then(x => ({ property: x }));
  } });exports.upsertProperty = upsertProperty;


const deleteProperty = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'DeleteProperty',
  inputFields: {
    propertyId: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) } },

  outputFields: {
    deletedPropertyId: { type: _graphql.GraphQLID } },

  async mutateAndGetPayload(input, ctx) {
    const propertyId = (0, _utils.fromGlobalId)(input.propertyId, 'Property');
    const [deletedPropertyId] = await ctx.db.
    table('properties').
    where({ id: propertyId }).
    delete().
    returning('id');
    return {
      deletedPropertyId:
      deletedPropertyId == null ?
      null :
      (0, _graphqlRelay.toGlobalId)('Property', deletedPropertyId) };

  } });exports.deleteProperty = deleteProperty;
//# sourceMappingURL=mutations.js.map
