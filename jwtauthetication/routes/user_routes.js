const express= require('express');
const autheticate = require('../middlewares/protectedRoute');

const router= express.Router();

router.get('/profile',autheticate,(req,res)=>{

    res.send(req.user);//we will pass the user object to access
});

module.exports=router;
