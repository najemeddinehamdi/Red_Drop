const {product} =require("../models/product.model")

module.exports.findAll=(req,res) =>{
    product.find({})
    .then(obj=> res.json(obj))
    .catch(err=> res.json(err))
}


module.exports.getOne= (req, res) => {
    product.findOne({ _id: req.params.id })
    .then((obj)=>res.json(obj))
    .catch(err=> res.json(err))
}

