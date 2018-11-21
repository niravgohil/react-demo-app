"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = upsertProperty;


async function upsertTransaction(payload, trx) {
  const { id, ...property } = payload;

  if (id == null) {
    const data = await trx.table('properties').insert(property, ['*']);
    return data;
  } else if (Object.keys(payload).length !== 0) {
    const data = await trx.
    table('properties').
    where({ id }).
    update(payload, ['*']);
    return data;
  }

  return [];
}

async function upsertProperty(
data,
trx,
ctx)
{
  const { db } = ctx;
  let upsertedProperty;

  if (trx) {
    [upsertedProperty] = await upsertTransaction(data, trx);
  } else {
    [upsertedProperty] = await db.transaction(async (t) =>
    upsertTransaction(data, t));

  }

  return upsertedProperty;
}
//# sourceMappingURL=upsertProperty.js.map
