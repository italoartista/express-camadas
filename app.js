const express = require('express');
const tarefaController = require('./controllers/tarefaController');

const app = express();
app.use(express.json());


// Listar de tarefas
app.get('/tarefas', tarefaController.getAllTarefas);

// Criar uma nova tarefa
app.post('/tarefas', tarefaController.createTarefa);

// Atualizar uma tarefa
app.put('/tarefas/:id', tarefaController.updateTarefa);

// Deletar uma tarefa
app.delete('/tarefas/:id', tarefaController.deleteTarefa);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});