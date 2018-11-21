/**
 * @flow
 * @relayHash 45e4b6e923ee845768a07cda2e680030
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpsertPropertyInput = {
  property: PropertyInput,
  clientMutationId?: ?string,
};
export type PropertyInput = {
  id?: ?string,
  livingSurface?: ?number,
  landSurface?: ?number,
  numberOfRooms?: ?number,
  numberOfParkings?: ?number,
  createdAt?: ?string,
};
export type PropertyUpsertMutationVariables = {|
  input: UpsertPropertyInput
|};
export type PropertyUpsertMutationResponse = {|
  +upsertProperty: ?{|
    +property: ?{|
      +id: string,
      +livingSurface: ?number,
    |}
  |}
|};
export type PropertyUpsertMutation = {|
  variables: PropertyUpsertMutationVariables,
  response: PropertyUpsertMutationResponse,
|};
*/


/*
mutation PropertyUpsertMutation(
  $input: UpsertPropertyInput!
) {
  upsertProperty(input: $input) {
    property {
      id
      livingSurface
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpsertPropertyInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "upsertProperty",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpsertPropertyInput!"
      }
    ],
    "concreteType": "UpsertPropertyPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "property",
        "storageKey": null,
        "args": null,
        "concreteType": "Property",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "PropertyUpsertMutation",
  "id": null,
  "text": "mutation PropertyUpsertMutation(\n  $input: UpsertPropertyInput!\n) {\n  upsertProperty(input: $input) {\n    property {\n      id\n      livingSurface\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PropertyUpsertMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "PropertyUpsertMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2cd1b905985d239febf1ba3d0fc14e71';
module.exports = node;
