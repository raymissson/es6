// operadores rest - resto das propriedades

const usuario={
    nome: 'Raymison',
    idade: 23,
    empresa: 'bshare'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4];
const [a, b, ...c] = arr;

console.log(a,b,c);
// somar numeros sem definir variáveis para receber os números
function soma(...params){
    return params.reduce((total, next)=>total+next);
}

console.log(soma(1,2,3,4));
// rest 

function somarest(a,b,...params){
    return params;
}

console.log(somarest(1,2,3,4));

// spread
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 =[...arr1,...arr2];

console.log(arr3);

// spread

const usu ={
    nome: 'Raymison',
    idade: 23,
    empresa: 'bshare'
};

const usu2 = {...usu, nome: 'Maklouf'};

console.log(usu2);