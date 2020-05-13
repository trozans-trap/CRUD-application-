//requiring schema from models
const User = require('../models/user');


//get when no id is passed i.e. get all users
exports.getallusers = async (req, res) => {

    await User.find({})
        .then((user) =>
            res.send(user))
        .catch(err =>
            res.status(500).json(err))

}

//get when some id is passed as parameter
exports.getuser = async (req, res) => {
    var _id = req.params.id;
    await User.find({ _id: _id })
        .then((person) => {
            if (person && person != "") {
                res.send(person)
            }
            else {
                res.status(404).json(" No User with such id ");
            }
        }).catch(err => res.status(500).json(err))

}

//get server by name
exports.getuserbyname = async (req, res) => {
    var name = req.params.name;
    await User.find({ name: name })
        .then((person) => {
            if (person && person != "") {
                res.send(person)
            }
            else {
                res.status(404).json(" No user with such id ");
            }
        }).catch(err => res.status(500).json(err))
}

//Create server object
exports.postuser = async (req, res, next) => {
    console.log(req.body);
    const { name, id, Language, Framework } = req.body;
    await User.findOne({ id: id }).then(async (person) => {
        if (person) {
            res.status(404).json("Id must be unique , Try with another id");
        }
        else {
            const newuser = new User({
                name,
                id,
                Language,
                Framework
            });
            await newuser.save().then((user) => {
                res.send(user);
            }).catch(err => res.status(500).json(err));
        }

    })
}

//update server object
exports.updateuser = async (req, res) => {
 
    var id = req.params.id;
    await User.findOneAndUpdate({ id: id }, req.body).then(async () => {
        await User.findOne({ id: req.body.id }).then((person) => {
            if (!person)
            res.status(404).json("No server with such id , Try with other id");
            else
                res.send(person)
        }).catch(err => res.status(500).json(err));
    }).catch(err => res.status(500).json(err));
}

//delete server object by passing id as params
exports.deleteuser = async (req, res) => {
    var id = req.params.id;
    await User.findOneAndRemove({ id: id }).then((person) => {
        if (!person)
        res.status(404).json("No server with such id , Try with other id");
        else
            res.send(person);
    }).catch(err => res.status(500).json(err));
}