//llamar al router de express
const express = require("express");
const router = express.Router();

//llamar a multer (procesar archivos)
const multer = require("multer");

const caragaImagen = multer.diskStorage({
    destination:function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/img/imgUsers"))
    },
    filename: function(req, file, cb) {
        let imagenUsuario = Date.now() + path.extname(file.originalname);
        cb(null, imagenUsuario);
    }
})
const upload = multer ({ caragaImagen : caragaImagen })


//llamar al controlador
const AdministradorController = require ("../controllers/AdministradorController")

//crear las rutas para "/..."  (app.get)
router.get("/", AdministradorController.administrador);

//USUARIOS
router.get("/usersList", AdministradorController.usersList);
//crear
router.get("/usersCreate", AdministradorController.usersCreate);
router.post("/usersSave", upload.single("img"), AdministradorController.usersSave);
//Editar
router.get("/usersEdit/:id", AdministradorController.usersEdit);
router.put("/usersUpdate/:id", upload.single("img"), AdministradorController. usersUpdate);

//exportar el router
module.exports = router;