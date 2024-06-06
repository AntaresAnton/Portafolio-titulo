"use strict";

<<<<<<< HEAD
require('dotenv').config();
module.exports = {
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
=======
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.claves = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_dotenv.default.config();
const claves = exports.claves = {
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user: process.env.USER || "",
  password: process.env.PASSWORD || "",
  SECRETO: process.env.SECRETO || ""
>>>>>>> 43df15dbfd66a1f80fe3bc73d61cc6ccd430fe6b
};