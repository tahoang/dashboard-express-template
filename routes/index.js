var express = require('express');
var router = express.Router();

var home = require('./home');


/* GET home page. */
router.use('/', home);
router.use('/home', home);



module.exports = router;
