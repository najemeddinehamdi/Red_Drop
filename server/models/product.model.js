const mongoose =require('mongoose')
const ProductsSchema = new mongoose.Schema({
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
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
},{timestamps: true});

module.exports.product= mongoose.model("product", ProductsSchema)