const pool = require('../bd');

async function createUser(objeto) {
    
    try {
        let query ="insert into registro set ?";


        const rows = await pool.query(query,[objeto]);
        return rows;

    } catch(error) {
        console.log(error);
    }

}

async function authUser(email,pass) {
    try {
        console.log("El usuario que llega al model : ", email,  " el password que llega al model : ",pass)
        // select * from usuario where mail = 'dileo.francoj@gmail.com' and password = '1234'
        let query = "select * from registro where col_email= ? and col_pass= ?";
        // [{}]
        console.log(query);
        const rows = await pool.query(query,[email,pass]);
        return rows;
        // empty set : 0 registros
    } catch(error) {
        console.log(error);
    }
}
module.exports = {createUser,authUser};
