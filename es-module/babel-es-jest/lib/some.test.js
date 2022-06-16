"use strict";

var _index = require("./index");

test('adds 1 + 2 to equal 3', () => {
  expect((0, _index.sum)(1, 2)).toBe(3);
});