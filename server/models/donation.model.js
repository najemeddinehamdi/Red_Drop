const mongoose =require('mongoose')



const DonationSchema = new mongoose.Schema({
    bloodType:{
        type:String,
        required: [true,"{PATH} is required"],
    },
    donationDate:{
        type: Date,
        required: [true,"{PATH} is required"],
    },
    BleedingTime:{
        type: Date,
        required: [true,"{PATH} is required"],
    },
    collectionVolume:{
        type:Number,
        required: [true,"{PATH} is required"],
    },
    hemoglobinLevel:{
        type:Number,
        required: [true,"{PATH} is required"],
    },
    idUser:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
},{timestamps: true});

module.exports.donation= mongoose.model("donation", DonationSchema)