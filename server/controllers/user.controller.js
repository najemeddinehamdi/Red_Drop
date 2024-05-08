const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { secret } = require("../config/jwt.config");
// const { isValidObjectId } = require("mongoose");

module.exports = {
    //?==========Register==========
    register: (req, res) => {
        // console.log("=======", req.body);
        User.create(req.body)
            .then((user) => {
                res
                    .cookie("userToken", jwt.sign({ id: user._id }, secret))
                    .json({ msg: "succes", user: user });
            })
            .catch((err) => res.status(400).json(err.errors));
    },
    //?==========Login==========
    login: (req, res) => {
        User.findOne({ email: req.body.email })
            .then((user) => {
                if (!user) {
                    // email not found in users collection
                    res.status(400).json({ msg: "Invalid login attempt." });
                } else {
                    // if we made it this far, we found a user with this email address
                    // let's compare the supplied password to the hashed password in the database.
                    bcrypt
                        .compare(req.body.password, user.password)
                        .then((isValid) => {
                            if (isValid) {
                                // if we made it this far, the password was correct
                                res
                                    .cookie("usertoken", jwt.sign({ id: user._id }, secret))
                                    .json({ msg: "SUCCESS" });
                            } else {
                                //password wasn't a match
                                console.log("password wasn't a match");
                                res.Status(400).json({ msg: "Invalid login attempt !" });
                            }
                        })
                        .catch((err) => {
                            res.status(400).json({ msg: "Invalid login attempt !" });
                        });
                }
            })
            .catch((err) => res.status(400).json(err.errors));
    },

    
    logout: (req, res) => {
        res.clearCookie("userToken");
        res.json({ message: "You are logged out" });
    },

    //?==========Read ALL==========
    AllUsers: (req, res) => {
        User.find()
            .then((allUsers) => { 
                console.log(allUsers); 
                res.status(200).json(allUsers); 
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    //?==========Update==========
    updateExistingUser: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updateUser) => {
                res.status(200).json(updateUser);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    //?==========READ ONE==========
    findOneSingleUser: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then((oneSingleUser) => {
                res.status(200).json(oneSingleUser);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    //?==========DELETE==========
    deleteAnExistingUser: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
};
