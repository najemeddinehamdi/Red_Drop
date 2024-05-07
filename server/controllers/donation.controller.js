const Donation = require('../models/donation.model');

module.exports = {
    //?==========Create==========
    // CreateDonation: (req, res) => {
    //     Donation.create(req.body)
    //         .then((CreatedDonation) => {
    //             console.log(CreatedDonation)
    //             res.status(200).json(CreatedDonation)
    //         }).catch((err) => {
    //             res.status(400).json(err)
    //         })
    // },
    //?==========Read ALL==========
    AllDonation: (req, res) => {
        Donation.find()
            .then((AllDonation) => {
                console.log(AllDonation);
                res.status(200).json(AllDonation);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    //?==========READ ONE==========
    findOneDonation: (req, res) => {
        Donation.findOne({ _id: req.params.id })
            .then((oneDonation) => {
                res.status(200).json(oneDonation);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    //?==========Update==========
    updateExistingDonation: (req, res) => {
        Donation.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(updatedDonation => {
                res.status(200).json(updatedDonation);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    //? =========== DELETE ==========
    deleteDonation: (req, res) => {
        Donation.deleteOne({ _id: req.params.id })
            .then(result => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    //? Get all donations by user id
    AllDonationByUserId: (req, res) => {
        Donation.find({ idUser: req.params.id })
            .then((AllDonation) => {
                console.log(AllDonation);
                res.status(200).json(AllDonation);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    // add donation with user id and add user id to req.body
    addDonation: (req, res) => {
        req.body.idUser = req.params.id;
        Donation.create(req.body)
            .then((CreatedDonation) => {
            console.log(CreatedDonation)
            res.status(200).json(CreatedDonation)
            }).catch((err) => {
            res.status(400).json(err)
            })
    }




    


}

