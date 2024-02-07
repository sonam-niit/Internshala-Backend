const express= require('express');
const upload = require('../middlewares/fileupload');
const { addProduct } = require('../controllers/product.controller');

const router= express.Router();

router.post('/',upload.single('picture'),addProduct)

module.exports=router