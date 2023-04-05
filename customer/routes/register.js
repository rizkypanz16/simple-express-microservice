var express = require('express');
var router = express.Router();

// import function from registerController
const registerController = require('./../controllers/registerController.js');

router.post('/', registerController.postRegister);

//export this router to use in our index.js
module.exports = router;