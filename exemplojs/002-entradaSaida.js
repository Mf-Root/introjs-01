// Chamando a biblioteca que será utilizada 
let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: '); // Faz captura do que foi digitado
console.log('Nome Digitado: ' + nome);

// Toda entrada é string
let n1 = entrada('Digite um número: ');
let n2 = entrada('Digite outro número: ');
let soma = parseInt(n1) + parseInt(n2)

console.log('A soma do 1º e do 2º número insserido é: ' + soma);


entrada();
console.log('Fim do Programa'); // Funciona como pausa do programa, aguarda uma ação para finalizar 


