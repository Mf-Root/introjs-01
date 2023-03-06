let entrada = require('prompt-sync')();

let n, n1, n2, media;

n = entrada ('Digite o 1º nota: ');
n1 = parseInt(n);
n = entrada('Digite o 2º note: ');
n2 = parseInt(n);

media = (n1 + n2) / 2

if (media < 5) {
    console.log(' I ');
} 
if ((media >= 5) && ( media < 6.5 )) {
    console.log(' R ');
}
if ((media >= 6.5) && ( media < 8.6 )) {
    console.log(' B ');
}
if (media >= 8.5){
    console.log(' MB ')
}
