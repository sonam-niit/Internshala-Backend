const express= require('express');
const upload = require('../middlewares/fileupload');
const { addProduct, getAllProducts, getProductById } = require('../controllers/product.controller');

const router= express.Router();

router.post('/',upload.single('picture'),addProduct)
router.get('/',getAllProducts);
router.get('/:id',getProductById);
// router.get("/search",searchDemo)

module.exports=router