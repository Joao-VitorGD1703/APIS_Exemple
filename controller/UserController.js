const BancoFuncoes = require('../services/bancoFuncoes')
const mysql = require('mysql2');

const Status = (statusUser) => {
    let sgStatus = '';
    let statusUsers = statusUser.toUpperCase(); // Corrigido aqui


    switch (statusUsers) {
        case 'ADMIM':
            sgStatus = 'ADM';
            break;
        case 'GERENTE DE PRODUTOS':
            sgStatus = 'GDP';
            break;
        case 'USUARIO BASICO':
            sgStatus = 'USB';
            break;
        default:
            sgStatus = 'NGD';
            break;
    }

    return sgStatus;
};

const birthdayDate = (age) => {

    const dataRecebida = age;

    const partesData = dataRecebida.split('/');

    const novaDataFormatada = `${partesData[2]}-${partesData[1]}-${partesData[0]}`;

    return novaDataFormatada
}


const VerifyUser = async (idUser) => {
    try {
        let base = new BancoFuncoes()
        let answer = await base.UserExiste(idUser)
        console.log(answer);

        if (answer == false) {
            console.log("entrou");

            return false

        } else {
            console.log("entrou certo");
            return true
        }

    } catch (error) {
        throw new Error(error);
    }

}
const createUser = async (req, res, next) => {
    try {
        let { idUser, name, age, office, status, wage } = req.access

        let base = new BancoFuncoes()
        let answer = await VerifyUser(idUser)
        console.log(answer);

        if (answer == false) {

            let statusUser = status.toUpperCase()

            let respStatus = Status(statusUser)
            let ageDate = birthdayDate(age)


            if (respStatus == 'NGD') {
                return res.json('status indefinido')
            }
            else {


                let create = await base.insertUser(idUser, name, ageDate, office, status, wage)
                return res.json(create)
            }


        } else {
            return res.json('usuario ja existe')
        }

    } catch (err) {
        console.log(err);
    }
}

const pesquisaUser = async (req, res, next) => {
    try {
        let { idUser } = req.access
        let base = new BancoFuncoes()

        let answer = await VerifyUser(idUser)
        console.log(answer);

        if (answer == true) {

            let resp = await base.selectUser(idUser)
            return res.json(resp)
        } else {
            return res.json("usuario não existe")
        }





    } catch (err) {

    }
}

module.exports = {
    createUser,
    pesquisaUser
}