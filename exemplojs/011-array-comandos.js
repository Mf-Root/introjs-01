let entrada = require('prompt-sync')(); 

let tarefas = [
    {
        id: 1, 
        tarefa: 'Estudar js', 
        realizada: false
    }, 
    {
        id: 2, 
        tarefa: 'Estudar BD', 
        realizada: false
    }, 
    {
        id: 3, 
        tarefa: 'Dormir', 
        realizada: true
    }
];

let opcao = 0;

do {
    
    console.log('LISTA DE TAREFAS');
    console.log('1 - Listar tarefas pendentes');
    console.log('2 - Listar tarefas realizadas');
    console.log('3 - Adicionar tarefa'); 
    console.log('4 - Editar tarefa');
    console.log('5 - Excluir tarefa');
    console.log('0 - Encerrar');
    opcao = entrada('Selecione uma opção:');

    if (opcao == 1) {
        console.log('---------------------')
        console.log('Tarefas Não Realizadas')
        for ( let cont in tarefas){
            if(tareas[cont].realizada == false){ 
            console.log('ID: ' + tarefas[cont].id);
            console.log('Tarefas' + tarefas[cont].tarefas);
            console.log('Realizada ' + tarefas[cont].realizada);
            }
        }
        console.log('-----------------------');
    }

    if (opcao == 2) {
        console.log('---------------------')
        console.log('Tarefas  Realizadas')
        for ( let cont in tarefas){
         if(tareas[cont].realizada == true){ 
            console.log('ID: ' + tarefas[cont].id);
            console.log('Tarefas' + tarefas[cont].tarefas);
            console.log('Realizada ' + tarefas[cont].realizada);
         }
        }
        console.log('-----------------------');
    }

    if (opcao == 3) {
        console.log('Adcionar Tarefa')
        let tarefa = entrada();
        const id = tarefa.length;
        tarefas.push({
            id: id ,
            tarefa: tarefa,
            realizada: false
        });
    }

    if (opcao == 4) {
        console.log('---------------------')
        console.log('Tarefas  Realizadas')
        for ( let cont in tarefas){
         if(tareas[cont].realizada == false){ 
           console.log(tarefas[cont].id + '-' + tarefas[cont].tarefa);
         }
        }
        const concluida = entrada('Insira o id da Tarefa a ser Concluida')
        const editar = concluida - 1;
        const txtTarefaEdit = tarefas[editar].tarefa;
        tarefas[editar] = {
            id: editar,
            tarefa: txtTarefaEdit,
            realizada: true
        } 
        console.log('-----------------------'); 
    }

    if (opcao == 5) {
        console.log('Excluir Tarefa');
        for (let cont in tarefas) {
            if (tarefas[cont].realizada == true)
        }
    }

} while (opcao != 0); 

console.log('Programa encerrado!');
entrada();