var mongoose = require('mongoose');

var ServerSchema  = new mongoose.Schema ({
    name:{
        type:String ,  
       },
    id:{
        type:Number,  
       },
    Language:{
        type:String ,  
       },
    Framework:{
        type:String ,  
       }
})

const Server = mongoose.model('Server',ServerSchema);
module.exports = Server;