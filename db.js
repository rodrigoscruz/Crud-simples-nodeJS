async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3307/crud");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

connect();

async function selectUsers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM user;');
    return rows;
}

async function insertUser(user){
    const conn = await connect();
    const sql = 'INSERT INTO user(name, pass) VALUES (?,?);';
    const values = [user.name, user.pass];
    await conn.query(sql, values);
}

module.exports = {selectUsers, insertUser}