const mongoose =require('mongoose')
const donationschema = new mongoose.Schema({
    bloodType:{
        type:String,
        required: [true,"{PATH} is required"],
    },
    donationDate:{
        type: Date,
        required: true ,
    }
},{timestamps: true});

module.exports.donation= mongoose.model("donation", donationschema)