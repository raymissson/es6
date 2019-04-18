"use strict";

var arr = [1, 3, 5, 7, 9];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // consome todo vetor e transforma em uma única informação

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
