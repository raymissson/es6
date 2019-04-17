"use strict";

function test(x) {
  // pode reatribuir valor
  var y = 2;

  if (x > 5) {
    // reatribuido
    y = 4;
    console.log(x, y);
  }
}

test(10);
