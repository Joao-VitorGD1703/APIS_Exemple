const BancoFuncoes = require('../services/bancoFuncoes')
const mysql = require('mysql2');



async function createProduct(req, res, next) {
    try {
        const { idProduto, nome, descricao, preco, qEstoque, categoria } = req.body

        const base = new BancoFuncoes()


        const answer = await base.insertProdutos(idProduto, nome, descricao, preco, qEstoque, categoria)
        console.log("resposta cagada: " + answer);


        return res.json("Sucesso")


    } catch (err) {
        //    return  res.json(err.message, err.code)
        return res.json(err.message)
    }
}

const ExisteProduct = async (idProduto) => {
    try {


        const base = new BancoFuncoes()
        let existe = false


        const answer = await base.selectProdutos(idProduto)
        console.log("resposta cagada: " + answer);

        if (idProduto.length != 0)
            existe = true

        return existe

    } catch (err) {
        //    return  res.json(err.message, err.code)
        return res.json(err.message)
    }

}

async function sellProduto(req, res, next) {
    try {
        let { idProduto, qComprada } = req.body



        Number(qComprada)
        const base = new BancoFuncoes()

        let qEstoque = await base.selectProdutos(idProduto)
        console.log(qEstoque);


        let estoque = qEstoque
        console.log("Retorna isso:" + estoque);
        let final = estoque[0].qEstoque - qComprada
        Number(final)


        const send = await base.sellProduto(idProduto, final)
        console.log(send);


        let answer = await base.selectProdutos(idProduto)
        console.log("resposta: " + answer);


        return res.json(answer)


    } catch (err) {
        return res.json(err.message)
    }
}
async function AlteraProduto(req, res, next) {
    try {

        let { idProduto, nome, descricao, preco, qEstoque, categoria } = req.body
        let base = new BancoFuncoes()

        let confirm = await base.selectProdutos(idProduto)
        console.log(`confirm: ${confirm}`);
        if (confirm) {
            let answer = await base.AlterarProduto(idProduto, nome, descricao, preco, qEstoque, categoria)
            console.log(answer);

            let change = await base.selectProdutos(idProduto)
            return res.json(change)
        } else {
            return res.json("Não encontrado")

        }
    } catch (err) {
        return res.json(err.message)
    }
}
async function searchProduto(req, res, next) {
    try {
        const { idProduto } = req.body

        const base = new BancoFuncoes()


        const answer = await base.selectProdutos(idProduto)
        console.log("resposta cagada: " + answer);


        return res.json(answer)


    } catch (err) {
        //    return  res.json(err.message, err.code)
        return res.json(err.message)
    }
}
async function deleteProduto(req, res, next) {
    try {
        let { idProduto } = req.body

        const base = new BancoFuncoes();

        let confirm = await base.selectProdutos(idProduto)
        if (confirm) {
            let answer = await base.deleteProduto(idProduto)
            console.log(answer);
            return res.json('deletado')

        } else {
            return res.json("Não encontrado")

        }



    } catch (err) {

    }
}
async function allProduto(req, res, next) {
    try {

        const base = new BancoFuncoes()


        const answer = await base.selectAllProdutos()


        return res.json(answer)


    } catch (err) {
        return res.json(err.message)
    }
}



module.exports = {
    createProduct,
    searchProduto,
    allProduto,
    sellProduto,
    AlteraProduto,
    deleteProduto
}