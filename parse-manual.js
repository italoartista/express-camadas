const express = require('express');
const app = express();

const tarefas = [
    { id: 1, descricao: 'Estudar Node.js', concluido: true },
    { id: 2, descricao: 'Estudar Express', concluido: false },
    { id: 3, descricao: 'Estudar MongoDB', concluido: false }
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Listar de tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

// Criar uma nova tarefa
app.post('/tarefas', (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const { descricao } = JSON.parse(body);
        const id = tarefas.length + 1;
        const tarefa = { id, descricao };
        tarefas.push(tarefa);
        res.json(tarefa);
    });
});

// Atualizar uma tarefa
app.put('/tarefas/:id', (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const { id } = req.params;
        const { descricao } = JSON.parse(body);
        const tarefa = tarefas.find(tarefa => tarefa.id == id);

        if (!tarefa) {
            return res.status(404).json({ erro: 'Tarefa não encontrada' });
        }

        tarefa.descricao = descricao;
        tarefas[tarefa.id - 1] = tarefa;
        res.json(tarefa);
    });
});

app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const index = tarefas.findIndex(tarefa => tarefa.id == id);

    if (index < 0) {
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    tarefas.splice(index, 1);
    res.json({ mensagem: 'Tarefa removida com sucesso' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});