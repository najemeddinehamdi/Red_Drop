const mongoose =require('mongoose')
const productschema = new mongoose.Schema({
    productName:{
        type:String,
        required: [true,"{PATH} is required"],
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required: [true,"{PATH} is required"],
    },
    image:{
        type:String,
    },
    idSponsor:{
        required: true
    }
},{timestamps: true});

module.exports.product= mongoose.model("product", productschema)