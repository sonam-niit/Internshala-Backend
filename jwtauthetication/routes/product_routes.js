const express= require('express');
const autheticate = require('../middlewares/protectedRoute');
const { addproduct, getAllProducts, getProductById } = require('../controllers/product_controller');
const upload = require('../middlewares/fileupload');


const router= express.Router();

router.post('/addproduct',upload.single('picture') ,addproduct);
router.get('/allproducts',getAllProducts);
router.get('/getProductId/:id',getProductById);

module.exports=router;
