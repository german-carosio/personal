const fs = require('fs');

// Traemos el archivo que contiene nuestra data a mostrar desde un json

//const productos = JSON.parse(fs.readFileSync('./productos.json'))


let MainController = {
   
    index: (req,res) => {
         res.render("index"/*,{productos: productos}*/);
    }
}



//exportar el controlador
module.exports = MainController;