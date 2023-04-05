var express = require('express');
var router = express.Router();

// import function from wishlistController
const wishlistController = require('./../controllers/wishlistController.js');

router.get('/', wishlistController.getWishlist);

router.get('/:wishlistId', wishlistController.getWishlistId);

router.post('/', wishlistController.postWishlist);

router.put('/:wishlistId', wishlistController.putWishlist);

router.delete('/:wishlistId', wishlistController.deleteWishlist);

//export this router to use in our index.js
module.exports = router;