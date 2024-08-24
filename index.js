const btnAdicionarTask = document.getElementById('addButton');
// declara variável    /  atribui a ela o elemento com ˆ esse id

function addTask() {
    console.log("Fala guys")
}

btnAdicionarTask.setAttribute('onclick', 'addTask()')
// pega a variável, e 1- adiciona no elemento o atributo onclick, 2- ativa a função citada