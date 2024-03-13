const express = require('express');
const { register, login } = require('../controllers/user.controller');

const router= express.Router(); //creating express Router
router.post('/register',register)
router.post('/login',login)

module.exports=router;