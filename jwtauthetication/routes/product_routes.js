const express= require('express');
const autheticate = require('../middlewares/protectedRoute');
const { addproduct } = require('../controllers/product_controller');
const upload = require('../middlewares/fileupload');


const router= express.Router();

router.post('/addproduct',upload.single('picture') ,addproduct);

module.exports=router;
