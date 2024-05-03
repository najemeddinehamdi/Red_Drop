const mongoose =require('mongoose')
const userschema = new mongoose.Schema({
    firstName:{
        type:String,
        required: [true,"{PATH} is required"],
        minlength:[3, "{PATH} must have at least 3"]
    },
    lastName:{
        type:String,
        required: [true,"{PATH} is required"],
        minlength:[3, "{PATH} must have at least 3"]
    },
    email:{
        type: String,
        required: [true,"{PATH} is required"],
    },
    password:{
        type: String,
        required:[true,"{PATH} is required"]
    },
    points:{
        type:Number,
    }
},{timestamps: true});

module.exports= mongoose.model("User", userschema)