const fs = require('fs');
const path = require('path');

let usuarios;

//Funcion para leer JSON
function leerJson() {
     const usersJsonRead = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'),{encoding:'utf-8'})
     
     if (usersJsonRead == "") {
     usuarios = [];
     }else {
     usuarios = JSON.parse(usersJsonRead);
     }
     return usuarios
}

//Función para escribir JSON 
function escribirJson() {
const usersJsonWrite = JSON.stringify(usuarios, null, "\t");
fs.writeFileSync(path.join(__dirname, '../database/usuarios.json'), usersJsonWrite);
}




let AdministradorController = {
   
    administrador: (req,res) => {
         res.render("administrador");
    },

//USUARIOS
    usersList: (req,res) => {

        leerJson()
        
        res.render("usersList", {usuarios:usuarios});
    },

//Creacion de usuario
    usersCreate: (req,res) => {

        res.render("usersCreate");
   },

    usersSave: (req,res) => {

        leerJson();
        
         let ultimoUser = usuarios.length -1;
         let nuevoId = usuarios[ultimoUser].id + 1;
    

        let usuarioNuevo = {
            id: nuevoId,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            documento: req.body.documento,
            fechaNacimiento: req.body.fechaNacimiento,
            telefono: req.body.telefono,
            email: req.body.email,
            password: req.body.password,
            img: req.file.filename        
        };

    usuarios.push(usuarioNuevo);
    
    console.log(usuarios);

    escribirJson();

    res.redirect("/");
},
//Editar usuario 
    usersEdit:(req,res) => {

         leerJson();

         const usuario = usuarios.find(element =>{
         return element.id === parseInt(req.params.id)
         })

         res.render("usersEdit",{userEdit: usuario});
},

//Editar producto 
    usersUpdate:(req,res) => {

         leerJson();
          
         usuarios.forEach(element => {
         
              
              
              if (element.id === parseInt(req.params.id)) {
              
                   element.nombre = req.body.nombre;
                   element.apellido = req.body.apellido;
                   element.documento = req.body.documento;
                   element.fechaNacimiento = req.body.fechaNacimiento;
                   element.telefono = req.body.telefono;
                   element.email = req.body.email ;
                   element.password = req.body.password;
              }
              
         });
         

         escribirJson();

         res.redirect("/administrador/usersList");
    },

//Eliminar usuario 
    userDelete:(req,res) => {

    leerJson();

    const eliminar = usuarios.filter(element =>{
        return element.id !== parseInt(req.params.id)
    });

    usuarios = eliminar;


    escribirJson();

    res.redirect("/administrador/usersList");
}
}



//exportar el controlador
module.exports = AdministradorController;