const express= require('express');
const autheticate = require('../middlewares/protectedRoute');
const { addproduct, getAllProducts } = require('../controllers/product_controller');
const upload = require('../middlewares/fileupload');


const router= express.Router();

router.post('/addproduct',upload.single('picture') ,addproduct);
router.get('/allproducts',getAllProducts);

module.exports=router;
