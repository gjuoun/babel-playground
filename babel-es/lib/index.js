import { var1 } from "./module";
var array1 = [1, 4, 9, 16]; // pass a function to map

var map1 = array1.map(function (x) {
  return x * 2;
});
console.log(map1);
console.log(var1);