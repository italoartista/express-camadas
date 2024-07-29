const tarefas = [
    { id: 1, descricao: 'Estudar Node.js', concluido: true },
    { id: 2, descricao: 'Estudar Express', concluido: false },
    { id: 3, descricao: 'Estudar MongoDB', concluido: false }
];

const getAllTarefas = () => tarefas;

const createTarefa = (descricao) => {
    const id = tarefas.length + 1;
    const tarefa = { id, descricao };
    tarefas.push(tarefa);
    return tarefa;
};

const updateTarefa = (id, descricao) => {
    const tarefa = tarefas.find(tarefa => tarefa.id == id);
    if (!tarefa) return null;
    tarefa.descricao = descricao;
    tarefas[tarefa.id - 1] = tarefa;
    return tarefa;
};

const deleteTarefa = (id) => {
    const index = tarefas.findIndex(tarefa => tarefa.id == id);
    if (index < 0) return null;
    tarefas.splice(index, 1);
    return true;
};

module.exports = {
    getAllTarefas,
    createTarefa,
    updateTarefa,
    deleteTarefa
};