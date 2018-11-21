"use strict";var _dotenv = _interopRequireDefault(require("dotenv"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_dotenv.default.config({ path: `.env.${process.env.NODE_ENV}.local` });
_dotenv.default.config({ path: `.env.${process.env.NODE_ENV}` });
_dotenv.default.config({ path: '.env.local' });
_dotenv.default.config({ path: '.env' });
//# sourceMappingURL=env.js.map
