//llamar al router de express
const express = require("express");
const router = express.Router();

//llamar al controlador
const UsersController = require ("../controllers/UsersController")

//login
router.get("/login", UsersController.login);

//register
router.get("/register", UsersController.register);
//router.post("/login", UsersController.register);



//exportar el router
module.exports = router;