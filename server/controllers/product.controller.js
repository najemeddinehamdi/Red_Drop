const Product =require("../models/product.model")




module.exports = {

    //?==========Create==========
    CreateProduct : (req, res) => {
        Product.create(req.body)
            .then((CreatedProduct) => {
                console.log(CreatedProduct)
                res.status(200).json(CreatedProduct)
            }).catch((err) => {
                res.status(400).json(err)
            })
    },


    //?==========Read ALL==========
    AllProduct: (req, res) => {
        Product.find()
            .then((AllProduct) => {
                console.log(AllProduct);
                res.status(200).json(AllProduct);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    //?==========READ ONE==========
    findOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then((oneProduct) => {
                res.status(200).json(oneProduct);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    //?==========Update==========
    updateExistingProduct : (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedProduct => {
                res.status(200).json(updatedProduct);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    //? =========== DELETE ==========
    deleteProduct : (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(result => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    }

}