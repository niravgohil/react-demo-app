"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.nodesField = exports.nodeField = exports.nodeInterface = void 0;


var _graphqlRelay = require("graphql-relay");

var _utils = require("./utils");

var _PropertyType = require("./PropertyType"); /* eslint-disable global-require */

const { nodeInterface, nodeField, nodesField } = (0, _graphqlRelay.nodeDefinitions)(
(globalId, context) => {
  const { type, id } = (0, _graphqlRelay.fromGlobalId)(globalId);
  switch (type) {
    case 'Property':
      return context.properties.load(id).then((0, _utils.assignType)('Property'));

    default:
      throw new Error(`Type ${type} is not implemented in node interface`);}

},

obj => {
  switch ((0, _utils.getType)(obj)) {
    case 'Property':
      return _PropertyType.PropertyType;
    default:
      return null;}

});exports.nodesField = nodesField;exports.nodeField = nodeField;exports.nodeInterface = nodeInterface;
//# sourceMappingURL=node.js.map
