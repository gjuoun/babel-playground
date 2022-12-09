import React from "react";
import { Component } from "./module";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { jsxs as _jsxs } from "@emotion/react/jsx-runtime";
export const App = () => {
  return _jsxs("div", {
    children: [_jsx("h1", {
      children: "Hello World"
    }), _jsx(Component, {
      children: "this is my component"
    })]
  });
};