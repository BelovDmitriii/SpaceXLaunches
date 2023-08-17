"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _launchesItem = _interopRequireDefault(require("../LaunchesItem/launchesItem"));
require("./launches-container.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Launches(_ref) {
  var launches = _ref.launches;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "launches__container"
  }, launches && launches.map(function (launch) {
    return /*#__PURE__*/_react["default"].createElement(_launchesItem["default"], {
      key: launch.id,
      launch: launch
    });
  })));
}
var _default = Launches;
exports["default"] = _default;