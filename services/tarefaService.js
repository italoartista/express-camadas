const tarefaModel = require('../models/tarefaModel');

const getAllTarefas = () => {
    return tarefaModel.getAllTarefas();
};

const createTarefa = (descricao) => {
    return tarefaModel.createTarefa(descricao);
};

const updateTarefa = (id, descricao) => {
    return tarefaModel.updateTarefa(id, descricao);
};

const deleteTarefa = (id) => {
    return tarefaModel.deleteTarefa(id);
};

module.exports = {
    getAllTarefas,
    createTarefa,
    updateTarefa,
    deleteTarefa
};