//desdestruturação
const usuario = {
    nome: 'raymison',
    idade: 23,
    end: {
        cidade: 'Manaus',
        estado: 'AM'
    }
};

const {nome, idade, end:{cidade} } = usuario;

console.log(nome,idade,cidade);

function mostraNome({nome, idade}){
    console.log(nome,idade);
}

mostraNome(usuario); 