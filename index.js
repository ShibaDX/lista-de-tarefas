const btnAdicionarTask = document.getElementById('addButton');
// declara variável    /  atribui a ela o elemento com ˆ esse id

btnAdicionarTask.setAttribute('onclick', 'addTask()')
// pega a variável, e 1- adiciona no elemento o atributo onclick, 2- ativa a função citada

function addTask() {
    // Pegar o valor digitado para adicionar no campo de adicionar tarefa
    const taskInput = document.getElementById("taskInput");

    // Verifica se o campo está vazio
    if (taskInput.value.length === 0) {
        alert("Campo vazio")

    } else {
        // Se não for vazio, executa a função para adicionar a tarefa no HTML
        adicionarLi(addTask);
    }
}
function adicionarLi(addTask) {
    const taskText = taskInput.value; // String
    // Pegar o elemento ul do HTML
    const taskList = document.getElementById('taskList');

    // Criar o elemento li para a nossa ul
    const newTask = document.createElement('li');
    const taskTextNode = document.createTextNode(taskText); // Precisa converter o tipo text para Node
    newTask.appendChild(taskTextNode);

    // Adicionar o li dentro ul
    taskList.appendChild(newTask);

    // Limpa o input após adicionar a li
    taskInput.value = "";
}





