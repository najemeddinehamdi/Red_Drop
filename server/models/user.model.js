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
    phoneNumber:{
        type:Number,
        required: [true,"{PATH} is required"],
        minlength:[8, "{PATH} must have at least 8"]
    },
    Occupation:{
        type:String,
        required: [true,"{PATH} is required"],
        minlength:[3, "{PATH} must have at least 3"]
    },
    Status:{
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
    contactInfo:{
        country :{
            type:String,
            required: [true,"{PATH} is required"],
            minlength:[3, "{PATH} must have at least 3"]
        },
        department:{
            type:String,
            required: [true,"{PATH} is required"],
            minlength:[3, "{PATH} must have at least 3"]
        },
        city:{
            type:String,
            required: [true,"{PATH} is required"],
            minlength:[3, "{PATH} must have at least 3"]
        },
        address:{
            type:String,
            required: [true,"{PATH} is required"],
            minlength:[3, "{PATH} must have at least 3"]
        },
    },
    rewardsPoints:{
        type:Number,
    },
    nbrDonation:{
        type:Number,
    },
},{timestamps: true});

module.exports= mongoose.model("User", userschema)