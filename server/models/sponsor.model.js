const mongoose =require('mongoose')
const SponsorSchema = new mongoose.Schema({
    sponsorName:{
        type:String,
        required: [true,"{PATH} is required"],
    },

},{timestamps: true});

const Sponsor = mongoose.model('Sponsor',SponsorSchema);
module.exports = Sponsor;