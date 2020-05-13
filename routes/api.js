var express = require('express');
var router = express.Router();

//Body parser
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//controller connection
const usersinfo = require('../controller/run');

//get when no id is passed i.e. GET All users
router.get('/users',usersinfo.getallusers);

//get when some id is passed as parameter
router.get('/users/:id',usersinfo.getuser);

//get user by name
router.get('/userbyname/:name',usersinfo.getuserbyname);

//Create usrer object
router.post('/users', urlencodedParser ,usersinfo.postuser);

//update user object
router.put('/users/:id', urlencodedParser ,usersinfo.updateuser);

//delete user object by passing id as params
router.delete('/users/:id',usersinfo.deleteuser);

module.exports = router;