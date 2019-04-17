"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

// não pode reatribuir um valor a variável
var a = 1;
a = (_readOnlyError("a"), 3); // mutando

var usu = {
  nome: 'Raymison'
};
usu.nome = 'Maklouf';
console.log(usu);
