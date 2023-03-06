// console.log('Hello');
let vermelho, Rosa;
let nome = 'Michel';
let idade = 35;
let trabalha = true;
let coresfavoritas = [vermelho, Rosa]
let endereco = {
    logradouro : 'Avenida',
    nnumero : '19',
    bairro : 'Aquele',
}
let covid = null;
let dengue;

// console.log(nome, idade, trabalha, coresfavoritas, endereco);

console.log(typeof(coresfavoritas));

console.log(Array.isArray(endereco)); // Testa se é um Array 

const eharray = Array.isArray(coresfavoritas);

console.log(eharray === true ? 'É um Array' : 'Não é um Array'); // Operador Ternario 

if (ehArray === true ) {
    console.log('É um array');
} else {                            // Mesma função que o operador ternario.
    console.log('Não é um Array');
}

