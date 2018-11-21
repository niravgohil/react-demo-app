/**
 * @flow
 * @relayHash e0ec07f94f9c02cfb777f599fcc55072
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Properties_root$ref = any;
export type propertiesQueryVariables = {||};
export type propertiesQueryResponse = {|
  +$fragmentRefs: Properties_root$ref
|};
export type propertiesQuery = {|
  variables: propertiesQueryVariables,
  response: propertiesQueryResponse,
|};
*/


/*
query propertiesQuery {
  ...Properties_root
}

fragment Properties_root on Query {
  properties {
    edges {
      node {
        id
        livingSurface
        landSurface
        numberOfRooms
        numberOfParkings
        createdAt
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "propertiesQuery",
  "id": null,
  "text": "query propertiesQuery {\n  ...Properties_root\n}\n\nfragment Properties_root on Query {\n  properties {\n    edges {\n      node {\n        id\n        livingSurface\n        landSurface\n        numberOfRooms\n        numberOfParkings\n        createdAt\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "propertiesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Properties_root",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "propertiesQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "properties",
        "storageKey": null,
        "args": null,
        "concreteType": "PropertyConnectionConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PropertyConnectionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "landSurface",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "numberOfRooms",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "numberOfParkings",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createdAt",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '8281077df00db15a5075837f49ee16f5';
module.exports = node;
