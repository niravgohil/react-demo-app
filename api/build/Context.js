"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.Context = void 0;










var _dataloader = _interopRequireDefault(require("dataloader"));

var _Validator = _interopRequireDefault(require("./Validator"));
var _utils = require("./schema/utils");
var _errors = require("./errors");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

class Context {



  constructor(request, db) {_defineProperty(this, "request", void 0);_defineProperty(this, "db", void 0);_defineProperty(this, "properties",




    new _dataloader.default((keys) =>
    this.db.
    table('properties').
    whereIn('id', keys).
    select().
    then((0, _utils.mapTo)(keys, x => x.id))));this.db = db;this.request = request;}


  /*
                                                                                      * Validation
                                                                                      */

  validate(input) {
    const validator = new _Validator.default(this, input, errors => {
      throw new _errors.ValidationError(errors);
    });

    return apply => {
      apply(validator);
      return validator.validate();
    };
  }}exports.Context = Context;var _default =


Context;exports.default = _default;
//# sourceMappingURL=Context.js.map
