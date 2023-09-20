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

module.exports = {}