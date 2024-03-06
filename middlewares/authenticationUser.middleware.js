
function createUser(req, res, next) {
    try{

        console.log(req.body);
        let { idUser, name, age, office, status, wage } = req.body
    
        if (!idUser || !name || !age || !office || !status || !wage) {
            throw new Error ('Campos incompletos. Certifique-se de fornecer todos os campos necessários.');
    
        }
        req.access ={
            idUser: idUser,
            name : name,
            age : age,
            office : office,
            status : status,
            wage : wage

        }
        console.log( req.access );
        next()


    }catch(err){
        res.json({Erro: err.message, Code: "aqui"})
    }


}
function pesquisaUser(req, res, next) {
    try{

        console.log(req.body);
        let { idUser } = req.body
    
        if (!idUser) {
            throw new Error ('Campos incompletos. Certifique-se de fornecer todos os campos necessários.');
    
        }
        req.access ={
            idUser: idUser,
         

        }
        console.log( req.access );
        next()


    }catch(err){
        res.json({Erro: err.message, Code: "aqui"})
    }


}

module.exports = {
    createUser,
    pesquisaUser
}