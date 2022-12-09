import React from "react";
import { Component } from "./module";
export default function DiceRoll() {
  const [num, setNum] = useState(getRandomNumber());

  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6);
  };

  const Add = () => {
    return /*#__PURE__*/React.createElement("div", null, "add count");
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, "Your dice roll:", num, /*#__PURE__*/React.createElement(Add, null), /*#__PURE__*/React.createElement(Component, null)));
}