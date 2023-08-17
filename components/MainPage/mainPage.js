"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _launches = _interopRequireDefault(require("../Launches/launches"));
var _button = _interopRequireDefault(require("../Button/button"));
var _api = require("../../reducers/api/api");
require("./main-page.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function SpaceXLaunches() {
  var _useState = (0, _react.useState)("ascending"),
    _useState2 = _slicedToArray(_useState, 2),
    sortOrder = _useState2[0],
    setSortOrder = _useState2[1];
  var _useGetLaunchesQuery = (0, _api.useGetLaunchesQuery)(),
    _useGetLaunchesQuery$ = _useGetLaunchesQuery.data,
    allLaunches = _useGetLaunchesQuery$ === void 0 ? [] : _useGetLaunchesQuery$,
    error = _useGetLaunchesQuery.error,
    isLoading = _useGetLaunchesQuery.isLoading;
  var handleSortChange = function handleSortChange() {
    setSortOrder(function (value) {
      return value === "ascending" ? "descending" : "ascending";
    });
  };
  var filteredLaunches = allLaunches.filter(function (item) {
    return item.success;
  }).filter(function (item) {
    return new Date(item.date_local).getFullYear() >= 2015 && new Date(item.date_local).getFullYear() <= 2019;
  });
  var sortedLaunches = filteredLaunches.sort(sortOrder === "ascending" ? function (a, b) {
    return new Date(b.date_utc) - new Date(a.date_utc);
  } : function (a, b) {
    return new Date(a.date_utc) - new Date(b.date_utc);
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    onClick: handleSortChange,
    text: sortOrder === "descending" ? "Sort by Newest" : "Sort by Oldest"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "main-page__container"
  }, isLoading && /*#__PURE__*/_react["default"].createElement("h2", null, "...Loading..."), error && /*#__PURE__*/_react["default"].createElement("h2", null, "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438..."), /*#__PURE__*/_react["default"].createElement(_launches["default"], {
    launches: sortedLaunches
  })));
}
var _default = SpaceXLaunches;
exports["default"] = _default;