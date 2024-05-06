const mongoose =require('mongoose')
const SponsorSchema = new mongoose.Schema({
    sponsorName:{
        type:String,
        required: [true,"{PATH} is required"],
        minlength:[3, "{PATH} must have at least 3"]
    },
},{timestamps: true});

module.exports.sponsor= mongoose.model("sponsor", SponsorSchema)