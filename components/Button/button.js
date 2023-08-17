"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./button.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Button(_ref) {
  var onClick = _ref.onClick,
    text = _ref.text;
  var buttonOnClick = function buttonOnClick(e) {
    e.preventDefault();
    onClick && onClick();
  };
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: buttonOnClick,
    className: "button"
  }, text);
}
var _default = Button;
exports["default"] = _default;