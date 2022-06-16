"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DiceRoll;

var _react = _interopRequireDefault(require("react"));

var _module = require("./module");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DiceRoll() {
  const [num, setNum] = useState(getRandomNumber());

  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6);
  };

  const Add = () => {
    return /*#__PURE__*/_react.default.createElement("div", null, "add count");
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, "Your dice roll:", num, /*#__PURE__*/_react.default.createElement(Add, null), /*#__PURE__*/_react.default.createElement(_module.Component, null)));
}