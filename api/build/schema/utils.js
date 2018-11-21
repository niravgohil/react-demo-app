"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.assignType = assignType;exports.getType = getType;exports.mapTo = mapTo;exports.fromGlobalId = fromGlobalId;exports.fromGlobalIds = fromGlobalIds;exports.wrapTransaction = void 0;


var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql"); /* eslint-disable import/prefer-default-export */




function assignType(type) {
  return obj => {
    // eslint-disable-next-line no-underscore-dangle, no-param-reassign
    if (obj) obj.__type = type;
    return obj;
  };
}

function getType(obj) {
  // eslint-disable-next-line no-underscore-dangle
  return obj ? obj.__type : undefined;
}

function mapTo(
keys,
keyFn)
{
  return rows => {
    const group = new Map(keys.map(key => [key, null]));
    rows.forEach(row => group.set(keyFn(row), row));
    /* $FlowFixMe */
    return Array.from(group.values());
  };
}

function fromGlobalId(
globalId,
expectedType)
{
  let types = Array.isArray(expectedType) ? expectedType : [expectedType];
  types = types.map(type => typeof type === 'object' ? type.name : type);
  const { id, type } = (0, _graphqlRelay.fromGlobalId)(globalId);

  if (!types.includes(type)) {
    throw new Error(
    `Expected input ID of type '${types.join(', ')}' but got '${type}'.`);

  }

  return id;
}

function fromGlobalIds(
globalIds,
expectedType)
{
  return globalIds.map(globalId => fromGlobalId(globalId, expectedType));
}







const wrapTransaction = func => (
data,
trx,
ctx) =>
{
  if (trx) {
    return func(data, trx, ctx);
  }

  return ctx.db.transaction(t => func(data, t, ctx));
};exports.wrapTransaction = wrapTransaction;
//# sourceMappingURL=utils.js.map
