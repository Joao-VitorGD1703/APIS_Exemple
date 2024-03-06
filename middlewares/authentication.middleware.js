


function createProduct(req, res, next) {
    try {
        console.log(req.body);

        const { idProduto, nome, descricao, preco, qEstoque, categoria } = req.body;
        // Verificar se todos os campos necessários estão presentes
        if (!idProduto || !nome || !descricao || !preco || !qEstoque || !categoria) {
          throw new Error('Campos incompletos. Certifique-se de fornecer todos os campos necessários.');
        }

        req.access = {
            idProduto: idProduto,
            nome: nome,
            descricao: descricao,
            preco: preco,
            qEstoque: qEstoque,
            categoria: categoria
        } 
        console.log( req.access);
        next()
    } catch (err) {

        res.json({Erro: err.message, Code: "aqui"})

    }

}
function searchProduto(req, res, next) {
    try {
        console.log(req.body);

        const { idProduto} = req.body;
        // Verificar se todos os campos necessários estão presentes
        if (!idProduto) {
          throw new Error('Campos incompletos. Certifique-se de fornecer todos os campos necessários.');
        }

        req.access = {
            idProduto: idProduto,
       
        } 
        console.log( req.access);
        next()
    } catch (err) {

        res.json({Erro: err.message, Code: "aqui"})

    }

}
function sellProduto(req, res, next) {
    try {
        console.log(req.body);

        const { idProduto,  qComprada} = req.body;


        if (!idProduto || !qComprada) {
          throw new Error('Campos incompletos. Certifique-se de fornecer todos os campos necessários.');
        }

        req.access = {
            idProduto: idProduto,
            qComprada: qComprada
       
        } 
        console.log( req.access);
        next()
    } catch (err) {

        res.json({Erro: err.message, Code: "aqui"})

    }

}
function AlteraProduto(req, res, next) {
    try {
        console.log(req.body);

        const {idProduto, nome, descricao, preco, qEstoque, categoria } = req.body;


        if (!idProduto || !nome || !descricao || !preco || !qEstoque || !categoria ) {
          throw new Error('Campos incompletos. Certifique-se de fornecer todos os campos necessários.');
        }

        req.access = {
            idProduto: idProduto,
            nome: nome,
            descricao: descricao,
            preco: preco,
            qEstoque: qEstoque,
            categoria: categoria,
       
        } 
        console.log( req.access);
        next()
    } catch (err) {

        res.json({Erro: err.message, Code: "aqui"})

    }

}
function allProduto(req, res, next) {
    try {


    
        next()
    } catch (err) {

        res.json({Erro: err.message, Code: "aqui"})

    }

}

 function apagarProduto(req, res, next) {
    try {
        console.log(req.body);

        const { idProduto} = req.body;
        if (!idProduto) {
          throw new Error('Campos incompletos. Certifique-se de fornecer todos os campos necessários.');
        }

        req.access = {
            idProduto: idProduto,
       
        } 
        console.log( req.access);
        next()
    } catch (err) {

        res.json({Erro: err.message, Code: "aqui"})

    }
}
module.exports={
    createProduct,
    searchProduto,
    allProduto,
    sellProduto,
    AlteraProduto,
    apagarProduto
}