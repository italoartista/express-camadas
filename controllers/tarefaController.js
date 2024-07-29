const tarefaService = require('../services/tarefaService');

const getAllTarefas = (req, res) => {
    const tarefas = tarefaService.getAllTarefas();
    res.json(tarefas);
};

const createTarefa = (req, res) => {
    const { descricao } = req.body;
    const tarefa = tarefaService.createTarefa(descricao);
    res.json(tarefa);
};

const updateTarefa = (req, res) => {
    const { id } = req.params;
    const { descricao } = req.body;
    const tarefa = tarefaService.updateTarefa(id, descricao);
    if (!tarefa) {
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }
    res.json(tarefa);
};

const deleteTarefa = (req, res) => {
    const { id } = req.params;
    const sucesso = tarefaService.deleteTarefa(id);
    if (!sucesso) {
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }
    res.json({ mensagem: 'Tarefa removida com sucesso' });
};




export { getAllTarefas, createTarefa, updateTarefa, deleteTarefa };
