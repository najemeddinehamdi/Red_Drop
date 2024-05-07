const Sponsor =require("../models/sponsor.model")

module.exports = {
    //?==========Create==========
    CreateSponsor : (req, res) => {
        Sponsor.create(req.body)
            .then((CreatedSponsor) => {
                console.log(CreatedSponsor)
                res.status(200).json(CreatedSponsor)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },
    //?==========Read ALL==========
    AllSponsor: (req, res) => {
        Sponsor.find()
            .then((AllSponsor) => {
                console.log(AllSponsor);
                res.status(200).json(AllSponsor);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    //?==========READ ONE==========
    findOneSponsor: (req, res) => {
        Sponsor.findOne({ _id: req.params.id })
            .then((oneSponsor) => {
                res.status(200).json(oneSponsor);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    //?==========Update==========
    updateExistingSponsor : (req, res) => {
        Sponsor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedSponsor => {
                res.status(200).json(updatedSponsor);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    //? =========== DELETE ==========
    deleteSponsor : (req, res) => {
        Sponsor.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json(result);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    }
}