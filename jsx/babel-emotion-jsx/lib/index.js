import React from "react";
import { Component } from "./module";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { Fragment as _Fragment } from "@emotion/react/jsx-runtime";
export default function DiceRoll() {
  const [num, setNum] = useState(getRandomNumber());

  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6);
  };

  const Add = () => {
    return _jsx("div", {
      children: "add count"
    });
  };

  return _jsx(_Fragment, {
    children: _jsxs("div", {
      children: ["Your dice roll:", num, _jsx(Add, {}), _jsx(Component, {})]
    })
  });
}