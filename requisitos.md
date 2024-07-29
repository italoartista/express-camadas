

# Documento de Requisitos de Rotas para Aplicação de Gestão de Tarefas

## 1. **Usuários**

### 1.1. **Registro de Usuário**

- **POST** `/api/users/register`
  - **Descrição**: Cria um novo usuário.
  - **Corpo da Requisição**:
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string"
    }
    ```

### 1.2. **Login**

- **POST** `/api/users/login`
  - **Descrição**: Faz login do usuário e retorna um token de autenticação.
  - **Corpo da Requisição**:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

### 1.3. **Logout**

- **POST** `/api/users/logout`
  - **Descrição**: Faz logout do usuário e invalida o token de autenticação.
  - **Cabeçalhos**:
    - `Authorization`: `Bearer <token>`

### 1.4. **Recuperação de Senha**

- **POST** `/api/users/reset-password`
  - **Descrição**: Envia um e-mail para recuperação de senha.
  - **Corpo da Requisição**:
    ```json
    {
      "email": "string"
    }
    ```

## 2. **Tarefas**

### 2.1. **Criar Tarefa**

- **POST** `/api/tasks`
  - **Descrição**: Cria uma nova tarefa.
  - **Corpo da Requisição**:
    ```json
    {
      "title": "string",
      "description": "string",
      "dueDate": "ISO 8601 date string",
      "priority": "low|medium|high",
      "category": "string" (opcional)
    }
    ```

### 2.2. **Listar Tarefas**

- **GET** `/api/tasks`
  - **Descrição**: Retorna uma lista de tarefas.
  - **Parâmetros de Consulta** (opcionais):
    - `status`: `pending|completed` (para filtrar tarefas pelo status)
    - `category`: `string` (para filtrar por categoria)
    - `sortBy`: `dueDate|priority` (para ordenar a lista)

### 2.3. **Detalhes da Tarefa**

- **GET** `/api/tasks/:taskId`
  - **Descrição**: Retorna os detalhes de uma tarefa específica.
  - **Parâmetros da URL**:
    - `taskId`: ID da tarefa

### 2.4. **Atualizar Tarefa**

- **PUT** `/api/tasks/:taskId`
  - **Descrição**: Atualiza os detalhes de uma tarefa existente.
  - **Corpo da Requisição**:
    ```json
    {
      "title": "string",
      "description": "string",
      "dueDate": "ISO 8601 date string",
      "priority": "low|medium|high",
      "category": "string" (opcional),
      "status": "pending|completed" (opcional)
    }
    ```
  - **Parâmetros da URL**:
    - `taskId`: ID da tarefa

### 2.5. **Excluir Tarefa**

- **DELETE** `/api/tasks/:taskId`
  - **Descrição**: Exclui uma tarefa específica.
  - **Parâmetros da URL**:
    - `taskId`: ID da tarefa

## 3. **Categorias**

### 3.1. **Criar Categoria**

- **POST** `/api/categories`
  - **Descrição**: Cria uma nova categoria.
  - **Corpo da Requisição**:
    ```json
    {
      "name": "string"
    }
    ```

### 3.2. **Listar Categorias**

- **GET** `/api/categories`
  - **Descrição**: Retorna uma lista de todas as categorias.

### 3.3. **Excluir Categoria**

- **DELETE** `/api/categories/:categoryId`
  - **Descrição**: Exclui uma categoria específica.
  - **Parâmetros da URL**:
    - `categoryId`: ID da categoria


