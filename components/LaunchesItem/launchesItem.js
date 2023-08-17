"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./launches-item.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function LaunchesItem(props) {
  var launch = props.launch;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "launches_item"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "launches_item__mainInfo"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, launch.name), /*#__PURE__*/_react["default"].createElement("p", null, new Date(launch.date_utc).toLocaleDateString()), /*#__PURE__*/_react["default"].createElement("p", null, launch.details)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "launches_item__image"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "img",
    src: launch.links.flickr.original[launch.links.flickr.original.length - 1],
    alt: "rocket"
  })));
}
var _default = LaunchesItem;
exports["default"] = _default;