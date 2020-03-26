const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/*
Métodos HTTP:
    GET: Buscar info do back-end
    POST: Criar info no back-end
    PUT: Alterar info do back-end
    DELETE: Deletar info do back-end
*/

/*
Parâmetros:
    Query: Parâmetros nomeados enviados na rota após "?", geralmente servem para filtros, paginação.
    Route: Utilizados para identificar recursos
    Request body: utilizado para criar ou alterar recursos
*/

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);