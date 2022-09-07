"use strict";

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

var item = [1, 2, 3, 4, 5].at(1);
console.log(Array.from(["a", "b", "c"].keys()));

var fn = function fn() {
  return 1;
};