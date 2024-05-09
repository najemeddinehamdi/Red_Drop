const mongoose = require('mongoose');
const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [2, "{PATH} must have at least 2 chars"], // Fixed the mismatch here
    },
    lastName: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [2, "{PATH} must have at least 2 chars"],
    },
    phoneNumber: {
        type: Number,
        minlength: [8, "{PATH} must have at least 8"]
    },
    Occupation: {
        type: String,
        minlength: [3, "{PATH} must have at least 3"]
    },
    Status: {
        type: String,
        minlength: [3, "{PATH} must have at least 3"]
    },
    email: {
        type: String,
        required: [true, "{PATH} is required"],
        validate: {
            validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(val),
            message: "Please enter a valid email",
        },
    },
    password: {
        type: String,
        minLength: [8, "{PATH} must have at least 8 chars"],    
    },
    bloodGroup: {   
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [2, "{PATH} must have at least 2 chars"]
    },
    contactInfo: {
        country: {
            type: String,
            minlength: [3, "{PATH} must have at least 3"]
        },
        department: {
            type: String,
            minlength: [3, "{PATH} must have at least 3"]
        },
        city: {
            type: String,
            minlength: [3, "{PATH} must have at least 3"]
        },
        address: {
            type: String,
            minlength: [3, "{PATH} must have at least 3"]
        },
    },
    rewardsPoints: {
        type: Number,
    },
    nbrDonation: {
        type: Number,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// add this after UserSchema is defined
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => (this._confirmPassword = value));

// Middleware used to validate the match between password and confirmPassword
UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Password must match confirm password");
    }
    next();
});

// Using bcrypt to hash the passwrd before saving to our DB
UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    });
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
