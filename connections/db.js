const mysql = require('mysql2');



const connection = mysql.createConnection({
    host: '127.0.0.1',      // O endereço do servidor MySQL
    user: 'root',   // Seu nome de usuário do MySQL
    password: '123456', // Sua senha do MySQL
    database: 'supermercado'  // O nome do banco de dados que deseja acessar
  
  });
  
  // Conectar ao banco de dados
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    } else {
      console.log('Conexão bem-sucedida ao banco de dados MySQL');
    }
    // Feche a conexão, pois não estamos realizando consultas
    // connection.end();
  });
  
  
  module.exports = connection
  
  
  
  
  
  
  
  
  
  