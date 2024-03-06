const express = require("express")

const app = express()
const PORT = 3000


app.use(express.json()); // Middleware para fazer o parse do corpo da solicitação como JSON

const routesCustomer = require('../router/rotas');
const routesUser = require('../router/rotasUser');
app.use(routesCustomer);
app.use(routesUser);

app.listen(PORT, () => {
  console.log(`Servidor Express em execução na porta ${PORT}`);
});


module.exports = app