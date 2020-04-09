//requiring schema from models
const Server = require('../models/server');

//get when No id is passed
exports.getallserver = (req,res)=>{ 

    Server.find({}).then((user)=>res.send(user)).catch(err=>console.log(err))
   
}

//get when some id is passed as parameter
exports.getserver = (req,res)=>{ 
    var id = req.params.id;
    Server.find({ id:id})
    .then((person)=>{
        if(person && person!="")
        {
         res.send(person)
        }
        else
        {
            res.send("404 , No server with such id ");
        }
    }).catch(err=>res.send(err))
    
}

//get server by name
exports.getserverbyname = (req,res)=>{
    var name = req.params.name;
    Server.find({ name:name})
    .then((person)=>{
       if(person && person!="")
       {
        res.send(person)
       }
       else
       {
           res.send("404 , No server with such id ");
       }
    }).catch(err=>res.send(err))
}

//Create server object
exports.postserver = (req,res,next)=>{
    console.log(req.body);
    const {name,id,Language,Framework} = req.body;
    Server.findOne({id : id}).then ((person)=>{
        if (person)
        {
            res.send("Id must be unique , Try with another id");
        }
        else
        {
            const newserver = new Server ({
                name,
                id,
                Language,
                Framework
            });
            newserver.save().then((user) => {
                res.send(user);
            }).catch(next);
        }
        
    })
}

//update server object
exports.updateserver = (req,res)=>{
  
    Server.findOneAndUpdate({id:req.body.id},req.body).then ( ()=>{
        Server.findOne({id: req.body.id}).then((person)=>{
            if(!person)
               res.send("No server with such id , Try with other id");
            else
               res.send(person)
        })
    })
}

//delete server object by passing id as params
exports.deleteserver = (req,res)=>{
    var id = req.params.id ;
    Server.findOneAndRemove({ id : id}).then((person)=>{
        if(!person)
            res.send("No server with such id , Try with other id");
        else
            res.send(person);
    })
}