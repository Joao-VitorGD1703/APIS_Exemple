const express = require("express")
let Auth = require('../middlewares/authenticationUser.middleware')
let UserController = require('../controller/UserController')

const app = express()

app.use(express.json())
let router = express.Router()


router.post('/api/v1/CreateUser', Auth.createUser, UserController.createUser)
router.get('/api/v1/searchuser', Auth.pesquisaUser, UserController.pesquisaUser)

module.exports = router; // Exporte o roteador
