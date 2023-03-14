//let entrada = require('prompt-sync')();


let notas = [9, 8.5, 7];
console.log(notas)

console.log(notas);
console.log('1 Nota' + notas[0]);
console.log('2 Nota' + notas[1]);
console.log('3 Nota' + notas[2]);

//Editar posições do array

notas[0] = 'MB';
notas[1] = 'MB';
notas[2] = 'B';
console.log('Notas Convertidas')
console.log(notas[0] + ' - ' + notas[1] + ' - ' + notas[2]);

let alunos = [
    {
        nome: 'Sebastião',
        dt_nasc: '11/11/11998',
        sexo: 'M'
    },
    {
        nome: 'Teste 1',
        dt_nasc: '11/11/11998',
        sexo: 'F'
    },
    {
        nome: 'Barney',
        dt_nasc: '11/11/11998',
        sexo: 'M?F'
    },
    {
        nome: 'Doc',
        dt_nasc: '11/11/11998',
        sexo: '?'
    }
];

console.log('3 Aluno');
console.log('Nome: ' + alunos[2].nome);
console.log('Data de Nascimento:' + alunos[2].dt_nasc);
console.log('Sexo: ' + alunos[2].sexo);

