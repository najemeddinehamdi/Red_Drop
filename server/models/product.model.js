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
        ref: 'sponsor'
    },
},{timestamps: true});

const Product = mongoose.model("product", ProductsSchema);
module.exports = Product;