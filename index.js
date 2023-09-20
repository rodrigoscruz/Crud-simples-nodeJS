(async () => {
    const db = require("./db");
    console.log('Começou!');
    console.log('SELECT * FROM USER');
    const usuarios = await db.selectUsers();
    console.log(usuarios);
})();
