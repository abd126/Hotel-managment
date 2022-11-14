const express = require("express");
const { loginController, SignupController, userGet, userAllGet, userUpdate, userDelete } = require("../Controllers/index");
const { authMiddleWare } = require("../Utils/authMiddleware");
const { registerValidations, loginValidations } = require('../Validation/index')



const router = express.Router();

// Auth Routes
router.post("/api/signup", registerValidations, SignupController);
router.post("/api/login", loginValidations, loginController);
router.put("/api/updateuser/:id", userUpdate)
router.delete("/api/deleteuser/:id",   userDelete)
router.get("/api/getuser/:id", userGet)
router.get("/api/getalluser",authMiddleWare, userAllGet)






module.exports = router;