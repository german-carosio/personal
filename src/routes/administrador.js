//llamar al router de express
const express = require("express");
const router = express.Router();
const path = require ("path")
//llamar a multer (procesar archivos)
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/img"))
    },
    filename: function(req, file, cb) {
        let imagenUsuario = Date.now() + path.extname(file.originalname);
        cb(null, imagenUsuario);
    }
})
const upload = multer ({ storage : storage })


//llamar al controlador
const AdministradorController = require ("../controllers/AdministradorController")

//crear las rutas para "/..."  (app.get)
router.get("/", AdministradorController.administrador);

//USUARIOS
router.get("/usersList", AdministradorController.usersList);
//crear
router.get("/usersCreate", AdministradorController.usersCreate);
router.post("/usersCreate", upload.single("img"), AdministradorController.usersSave);
//Editar
router.get("/usersEdit/:id", AdministradorController.usersEdit);
router.put("/usersUpdate/:id", upload.single("img"), AdministradorController. usersUpdate);

//eliminar
router.delete("/usersList", upload.single("img"), AdministradorController.usersList);
//exportar el router
module.exports = router;