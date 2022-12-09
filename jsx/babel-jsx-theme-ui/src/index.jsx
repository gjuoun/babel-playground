import React from "react";
import { Component } from "./module";
import { ThemeProvider } from "theme-ui";

export const theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
  },
};


export const App = () => (
  <ThemeProvider theme={theme}>
    <h1
      sx={{
        color: "primary",
        fontFamily: "heading",
      }}
    >
      Hello
    </h1>
    <Component />
  </ThemeProvider>
);
