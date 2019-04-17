"use strict";

var arr = [1, 3, 4, 5, 6];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
