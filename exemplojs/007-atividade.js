let entrada = require('prompt-sync')();

let n, n1, n2;

n = entrada ('Digite o 1º nota: ');
n1 = parseFloat(n);
n = entrada('Digite o 2º note: ');
n2 = parseFloat(n);
let contador = n1

if (n1 < n2){
    
    do {
        
        console.log(contador);
        contador++;
    } while (contador <= n2 );

} else if (n1 > n2) {
    do {
        console.log(contador);
        contador--;
   }while(contador >= n2);
}

