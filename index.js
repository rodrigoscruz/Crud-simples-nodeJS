(async () => {
    const db = require("./db");
    console.log('Começou!');

    //console.log('INSERT INTO USER');
    //await db.insertUser({name:"Beltrano", pass: "654"});

    console.log('UPDATE USER');
    await db.updateUser(4, {name:"Beltrano", pass: "000"});

    console.log('SELECT * FROM USER');
    const usuarios = await db.selectUsers();
    console.log(usuarios);
})();
