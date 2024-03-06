const express = require("express")
let Auth = require('../middlewares/authentication.middleware')
let productController = require('../controller/ProductController')

const app = express()

app.use(express.json())
let router = express.Router()


// Rota de exemplo
router.get('/exemplo', (req, res) => {
    res.json('Esta é uma rota de exemplo.');
});

// Rota para criar um produto
router.post('/api/v1/createProduto', Auth.createProduct, productController.createProduct);

router.get('/api/v1/searchProduto', Auth.searchProduto, productController.searchProduto);

router.get('/api/v1/allProduto', Auth.allProduto, productController.allProduto);

router.put('/api/v1/sellProduto', Auth.sellProduto, productController.sellProduto);

router.put('/api/v1/alteraProduto', Auth.AlteraProduto, productController.AlteraProduto);

router.delete('/api/v1/apagarProduto', Auth.apagarProduto , productController.deleteProduto)



module.exports = router; // Exporte o roteador




