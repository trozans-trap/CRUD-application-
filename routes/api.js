var express = require('express');
var router = express.Router();

//Body parser
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//controller connection
const serverinfo = require('../controller/run');

//get when No id is passed
router.get('/server',serverinfo.getallserver);
//get when some id is passed as parameter
router.get('/server/:id',serverinfo.getserver);
//get server by name
router.get('/serverbyname/:name',serverinfo.getserverbyname);
//Create server object
router.post('/server', urlencodedParser ,serverinfo.postserver);
//update server object
router.put('/server', urlencodedParser ,serverinfo.updateserver);
//delete server object by passing id as params
router.delete('/server/:id',serverinfo.deleteserver);

module.exports = router;