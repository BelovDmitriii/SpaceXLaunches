"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _navigation = _interopRequireDefault(require("./components/Navigation/navigation.jsx"));
var _mainPage = _interopRequireDefault(require("./components/MainPage/mainPage.jsx"));
var _reactRedux = require("react-redux");
var _store = require("./reducers/store.js");
require("./App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: _store.store
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "main_page__wrapper"
  }, /*#__PURE__*/_react["default"].createElement(_navigation["default"], null), /*#__PURE__*/_react["default"].createElement(_mainPage["default"], null)));
};
var _default = App;
exports["default"] = _default;