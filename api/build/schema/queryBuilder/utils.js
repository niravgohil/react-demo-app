"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.toSnakeCase = void 0;

const toSnakeCase = (str) =>
str.replace(/[A-Z]{1}/g, a => `_${a.toLowerCase()}`);exports.toSnakeCase = toSnakeCase;
//# sourceMappingURL=utils.js.map
