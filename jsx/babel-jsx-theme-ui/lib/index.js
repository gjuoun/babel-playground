import React from "react";
import { Component } from "./module";
import { ThemeProvider } from "theme-ui";
import { jsx as _jsx } from "theme-ui/jsx-runtime";
import { jsxs as _jsxs } from "theme-ui/jsx-runtime";
export const theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace"
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e"
  }
};
export const App = () => _jsxs(ThemeProvider, {
  theme: theme,
  children: [_jsx("h1", {
    sx: {
      color: "primary",
      fontFamily: "heading"
    },
    children: "Hello"
  }), _jsx(Component, {})]
});