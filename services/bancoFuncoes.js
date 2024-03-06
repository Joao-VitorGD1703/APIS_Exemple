const mysql = require('mysql2');
const connection = require("../connections/db")

//teste
const util = require('util');
const queryAsync = util.promisify(connection.query).bind(connection);

class FuncoesBD {

    async queryAsync(sql, values) {
        return new Promise((resolve, reject) => {
            pool.query(sql, values, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async insertProdutos(idProduto, nome, descricao, preco, qEstoque, categoria) {
        const sql = 'INSERT INTO produtos (idProduto, nome, descricao, preco, qEstoque, categoria) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [idProduto, nome, descricao, preco, qEstoque, categoria];
        console.log(sql);
        try {
            const results = await queryAsync(sql, values);

            console.log('Dados inserirdados com sucesso!');
            let cadastrado = 'Dados inserirdados com sucesso!'
            return cadastrado;



        } catch (error) {
            console.error(`Erro ao inserirdados dados do produto `, error);
            throw new Error('Erro ao inserirdados dados do produto no banco de dados');

        }
    }

    async selectProdutos(idProduto) {
        const sql = 'SELECT * FROM produtos WHERE idProduto = ?';
        const values = [idProduto];

        try {
            const results = await queryAsync(sql, values);
            // console.log(results);

            if (results.length === 0) {
                throw new Error('ID do produto não encontrado');
            } else {
                console.log('Dados encontrado com sucesso!');
                return results;
            }
        } catch (error) {
            console.error(`Erro ao buscar dados do produto ${values[0]} banco de dados:`, error);
            throw new Error('Erro ao buscar dados do produto no banco de dados');
        }
    }

    async sellProduto(idProduto, novoValorParaQEstoque) {
        let sql = 'UPDATE produtos SET qEstoque = ? WHERE idProduto = ?';
        const values = [novoValorParaQEstoque, idProduto];
        console.log(sql);

        try {
            const results = await queryAsync(sql, values);

            console.log('Dados apagados com sucesso!');
            return results;


        } catch (error) {
            console.error(`Erro ao apagar dados do produto ${values[0]} banco de dados:`, error);
            throw new Error('Erro ao apagar dados do produto no banco de dados');
        }
    }

    async deleteProduto(idProduto) {
        const sql = 'DELETE FROM produtos WHERE idProduto = ?';
        const values = [idProduto];
        console.log(sql, values);
        try {
            const results = await queryAsync(sql, values);
            console.log('Dados apagados com sucesso com sucesso!');
            return results;

        } catch (error) {
            console.error(`Erro ao apagados dados do produto ${values[0]} banco de dados:`, error);
            throw new Error('Erro ao apagados dados do produto no banco de dados');
        }


    }


    async AlterarProduto(idProduto, nome, descricao, preco, qEstoque, categoria) {
        let sql = 'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, qEstoque = ?, categoria = ? WHERE idProduto = ?';
        const values = [nome, descricao, preco, qEstoque, categoria, idProduto];


        try {
            const results = await queryAsync(sql, values);

            console.log('Dados alterados com sucesso!');
            return results;


        } catch (error) {
            console.error(`Erro ao alterar dados do produto ${values[0]} banco de dados:`, error);
            throw new Error('Erro ao alterar dados do produto no banco de dados');
        }

    }

    async  selectAllProdutos() {
        const sql = 'SELECT * FROM produtos';
        const values = [];
    
        console.log(sql);
    
        try {
            const results = await queryAsync(sql, values);
            console.log('Dados buscados com sucesso!');
            return results;
        } catch (error) {
            console.error(`Erro ao buscar todos dados do produto no banco de dados:`, error);
            throw new Error('Erro ao buscar dados do produto banco de dados:');
        }
    }

    async UserExiste(idUser){
        const sql = 'SELECT * FROM user WHERE idUser = ?';
        const values = [idUser];

        try {
            const results = await queryAsync(sql, values);
            // console.log(results);

            if (results.length === 0) {
                return false
            } else {
                console.log('Dados encontrado com sucesso!');
                return results;
            }
        } catch (error) {
            console.error(`Erro ao buscar dados do usuario ${values[0]} banco de dados:`, error);
            throw new Error('Erro ao buscar dados do usuario no banco de dados' + error);
        }
    }
    async insertUser(idUser, nome, age, office, status, wage) {
        const sql = 'INSERT INTO user (idUser, nome, age, office, status, wage) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [idUser, nome, age, office, status, wage];
        console.log(sql);
        try {
            const results = await queryAsync(sql, values);

            console.log('Dados inserirdados com sucesso!');
            let cadastrado = 'Dados inserirdados com sucesso!'
            return cadastrado;



        } catch (error) {
            console.error(`Erro ao inserirdados dados do produto `, error);
            throw new Error('Erro ao inserirdados dados do produto no banco de dados' + error);

        }
    }

    async selectUser(idUser) {
        const sql = 'SELECT * FROM user WHERE idUser = ?';
        const values = [idUser];

        try {
            const results = await queryAsync(sql, values);
            // console.log(results);

            if (results.length === 0) {
                throw new Error('ID do produto não encontrado');
            } else {
                console.log('Dados encontrado com sucesso!');
                return results;
            }
        } catch (error) {
            console.error(`Erro ao buscar dados do produto ${values[0]} banco de dados:`, error);
            throw new Error('Erro ao buscar dados do produto no banco de dados');
        }
    }
}


module.exports = FuncoesBD