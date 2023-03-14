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

for ( let cont =0; cont < alunos.length; cont++){
    console.log((cont + 1 ) + ' ° Aluno');
    console.log('3 Aluno');
    console.log('Nome: ' + alunos[cont].nome);
    console.log('Data de Nascimento:' + alunos[cont].dt_nasc);
    console.log('Sexo: ' + alunos[cont].sexo);

}


