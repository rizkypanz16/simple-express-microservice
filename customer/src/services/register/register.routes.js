var express = require('express');
var router = express.Router();

// import function from registerController
const registerController = require('./register.controller');

router.post('/', registerController.postRegister);

//export this router to use in our index.js
module.exports = router;