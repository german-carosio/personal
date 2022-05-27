const fs = require('fs');

// Traemos el archivo que contiene nuestra data a mostrar desde un json

//const productos = JSON.parse(fs.readFileSync('./productos.json'))


let UsersController = {
   
    login: (req,res) => {
         res.render("login");
    },

    register: (req,res) => {
        res.render("register");
   }

}



//exportar el controlador
module.exports = UsersController;