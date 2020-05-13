var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());


//Db config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})
 .then(()=> console.log('MongoDb Connected...'))
 .catch(err=> console.log(err));

//Routes
app.use('/api',require('./routes/api'));

//Listen to port
var port =  process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Running Succesfully on ${port}`);
})