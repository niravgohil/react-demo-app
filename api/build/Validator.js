"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _isEmail = _interopRequireDefault(require("validator/lib/isEmail"));
var _isLength = _interopRequireDefault(require("validator/lib/isLength"));
var _isURL = _interopRequireDefault(require("validator/lib/isURL"));
var _trim = _interopRequireDefault(require("validator/lib/trim"));
var _utils = require("./schema/utils");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


function isEmpty(value) {
  return typeof value === 'undefined' || value === null;
}

/**
   * A set of validation helper methods that are indended to reduce
   * the amount of boilerpate code in GraphQL mutations. It's is based
   * on the popular "validator" library that you can find at:
   * https://github.com/chriso/validator.js
   */

class Validator {







  constructor(ctx, input, onError) {_defineProperty(this, "user", void 0);_defineProperty(this, "t", void 0);_defineProperty(this, "input", void 0);_defineProperty(this, "onError", void 0);_defineProperty(this, "errors", []);_defineProperty(this, "states", []);
    this.user = ctx.user;
    this.t = ctx.t;
    this.input = input;
    this.onError = onError;
  }

  /**
     * Initialized a new state for the field.
     */
  field(
  key,
  {
    as,
    alias,
    trim,
    transform } =





  {})
  {
    const name = alias || key;

    let value = this.input[key];

    if (value && trim) {
      value = (0, _trim.default)(value, trim === true ? undefined : trim);
    }

    if (transform) {
      value = transform(value);
    }

    this.state = {
      key,
      as,
      name,
      value,
      promise: undefined,
      addError: (message) =>
      this.errors.push({
        key,
        message:
        message || this.t('The {{- name}} field is invalid', { name }) }) };


    this.states.push(this.state);
    return this;
  }

  isRequired(validateOnly, message) {
    if (!validateOnly && !this.state.value) {
      this.state.addError(
      message ||
      this.t('The {{- name}} field cannot be empty', {
        name: this.t(this.state.name) }));


    }
    return this;
  }

  isEmail(options, message) {
    if (!isEmpty(this.state.value) && !(0, _isEmail.default)(this.state.value, options)) {
      this.state.addError(message || this.t('The email address is invalid'));
    }
    return this;
  }

  isFloat(options, message) {
    if (
    !isEmpty(this.state.value) && (
    typeof this.state.value !== 'number' ||
    options.min && this.state.value < options.min ||
    options.max && this.state.value > options.max))
    {
      this.state.addError(
      message ||
      this.t('The {{- name}} must be a FLOAT between {{min}} and {{max}}', {
        name: this.t(this.state.name),
        ...options }));


    }
    return this;
  }

  isInt(options, message) {
    if (
    !isEmpty(this.state.value) && (
    typeof this.state.value !== 'number' ||
    !Number.isInteger(this.state.value) ||
    options.min && this.state.value < options.min ||
    options.max && this.state.value > options.max))
    {
      this.state.addError(
      message ||
      this.t('The {{- name}} must be a INT between {{min}} and {{max}}', {
        name: this.t(this.state.name),
        ...options }));


    }
    return this;
  }

  isLength(options, message) {
    if (!isEmpty(this.state.value) && !(0, _isLength.default)(this.state.value, options)) {
      if (options && options.min && options.max) {
        this.state.addError(
        message ||
        this.t(
        'The {{- name}} field must be between {{min}} and {{max}} characters long',
        { name: this.t(this.state.name), ...options }));


      } else if (options && options.max) {
        this.state.addError(
        message ||
        this.t(
        'The {{- name}} field must be up to {{max}} characters long',
        {
          name: this.t(this.state.name),
          ...options }));



      } else {
        this.state.addError(message);
      }
    }
    return this;
  }

  isURL(options, message) {
    if (!isEmpty(this.state.value) && !(0, _isURL.default)(this.state.value, options)) {
      this.state.addError(message);
    }
    return this;
  }

  is(check, message) {
    this.state.promise = (
    this.state.promise || Promise.resolve(this.state)).
    then(
    (state) =>
    isEmpty(state.value) ?
    state :
    Promise.resolve().
    then(() => check(state.value, message)).
    then(isValid => {
      if (!isValid) state.addError(message);
      return state;
    }).
    catch(err => {
      state.addError(err.message);
      return Promise.resolve(state);
    }));

    return this;
  }

  fromGlobalId(type) {
    if (!isEmpty(this.state.value)) {
      this.state.value = (0, _utils.fromGlobalId)(this.state.value, type);
    }
    return this;
  }

  fromGlobalIds(type) {
    if (!isEmpty(this.state.value)) {
      this.state.value = this.state.value.map(id => (0, _utils.fromGlobalId)(id, type));
    }
    return this;
  }

  canEdit(userTypes) {
    if (
    !(
    this.user &&
    userTypes.map(userType => this.user[userType]).includes(true)))

    {
      this.state.value = undefined;
    }
    return this;
  }

  validate() {
    const done = states => {
      if (this.errors.length && this.onError) {
        this.onError(this.errors);
      }

      return states.
      filter(x => typeof x.value !== 'undefined').
      reduce((acc, state) => {
        acc[state.as || state.key] = state.value;
        return acc;
      }, {});
    };

    return this.states.some(x => x.promise) ?
    Promise.all(this.states.map(x => x.promise || Promise.resolve(x))).then(
    done) :

    done(this.states);
  }}exports.default = Validator;
//# sourceMappingURL=Validator.js.map
