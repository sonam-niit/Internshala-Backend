const {  createNewUser, getUserById, deleteUserById, UpdateUserById, getAllUsers } = require('../controllers/user.controller');
const express= require('express');

const router= express.Router();

router.get("/", getAllUsers)
router.post("/", createNewUser)
router.get("/:id",getUserById)
router.delete("/:id",deleteUserById)
router.put("/:id", UpdateUserById)

module.exports=router;