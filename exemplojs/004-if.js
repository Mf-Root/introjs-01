let entrada = require('prompt-sync')();

let idade = entrada('Digite sua idade ');

if (idade === 18){
    console.log('Você tm idade para carteira de habilitação')
}
if (idade > 18 ){
    console.log('Você já poderia estar dirigindo se tivesse habilitação')
}
if (idade < 18 ){
    console.log('Você só anda de carona')
}


//outro modo 


if (idade > 18) {
    console.log('Voce há poderia estar dirigindo se tivesse habilitaçao');
} else if (idade < 18) {
    console.log ('Voce só anda de carona');
} else {
    console.log('Você tem idade para a carteira de habilitação')
}


