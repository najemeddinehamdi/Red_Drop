const {user} =require("../models/user.model")

module.exports.create=(req,res) =>{
    user.create(req.body)
    .then((obj)=>res.json(obj))
    .catch((err)=>{
        res.status(400).json(err)
    })
}
