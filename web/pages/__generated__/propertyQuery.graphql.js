/**
 * @flow
 * @relayHash c0e0175930324f70d498fe68369c8005
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Property_property$ref = any;
export type propertyQueryVariables = {|
  propertyId: string
|};
export type propertyQueryResponse = {|
  +property: ?{|
    +$fragmentRefs: Property_property$ref
  |}
|};
export type propertyQuery = {|
  variables: propertyQueryVariables,
  response: propertyQueryResponse,
|};
*/


/*
query propertyQuery(
  $propertyId: ID!
) {
  property: node(id: $propertyId) {
    __typename
    ...Property_property
    id
  }
}

fragment Property_property on Property {
  id
  livingSurface
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "propertyId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "propertyId",
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "propertyQuery",
  "id": null,
  "text": "query propertyQuery(\n  $propertyId: ID!\n) {\n  property: node(id: $propertyId) {\n    __typename\n    ...Property_property\n    id\n  }\n}\n\nfragment Property_property on Property {\n  id\n  livingSurface\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "propertyQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "property",
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Property_property",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "propertyQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "property",
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Property",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "livingSurface",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '568e84b911100cf5010ec35e0b6ff480';
module.exports = node;
