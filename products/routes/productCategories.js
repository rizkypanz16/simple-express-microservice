var express = require('express');
var router = express.Router();

// import function from customerController
const productCategoriesController = require('./../controllers/productCategoriesController.js');

router.get('/', productCategoriesController.getProductCategories);

router.post('/', productCategoriesController.postProductCategories);

router.get('/:productCategoryId', productCategoriesController.getProductCategoriesId);

router.put('/:productCategoryId', productCategoriesController.putProductCategories);

router.delete('/:productCategoryId', productCategoriesController.deleteProductCategories);

//export this router to use in our index.js
module.exports = router;