"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.ForbiddenError = exports.UnauthorizedError = exports.ValidationError = void 0;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
/* eslint-disable no-undef */ // TEMP



class ValidationError extends Error {



  constructor(errors) {
    super('The request is invalid.');_defineProperty(this, "code", 400);_defineProperty(this, "state", void 0);
    this.temp = 'hello';

    this.state = errors.reduce((result, error) => {
      if (Object.prototype.hasOwnProperty.call(result, error.key)) {
        result[error.key].push(error.message);
      } else {
        Object.defineProperty(result, error.key, {
          value: [error.message],
          enumerable: true });

      }
      return result;
    }, {});
  }}exports.ValidationError = ValidationError;


class UnauthorizedError extends Error {constructor(...args) {super(...args);_defineProperty(this, "code",
    401);_defineProperty(this, "message",
    this.message || 'Anonymous access is denied.');}}exports.UnauthorizedError = UnauthorizedError;


class ForbiddenError extends Error {constructor(...args) {super(...args);_defineProperty(this, "code",
    403);_defineProperty(this, "message",
    this.message || 'Access is denied.');}}exports.ForbiddenError = ForbiddenError;
//# sourceMappingURL=errors.js.map
