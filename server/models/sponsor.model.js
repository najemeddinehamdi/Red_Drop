const mongoose =require('mongoose')
const SponsorSchema = new mongoose.Schema({
    sponsorName:{
        type:String,
        required: [true,"{PATH} is required"],
        minlength:[3, "{PATH} must have at least 3"]
    },
    banner:{
        type:String,
        required: [true,"{PATH} is required"],
    },
},{timestamps: true});

const Sponsor = mongoose.model('Sponsor',SponsorSchema);
module.exports = Sponsor;