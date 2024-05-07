const donationController = require('../controllers/donation.controller');

module.exports = (app) => {
    //? =========== READ ALL ==========
    app.get('/api/donation', donationController.AllDonation);
    //? =========== READ ONE ==========
    app.get('/api/donation/:id', donationController.findOneDonation);
    //? =========== CREATE ==========
    // app.post('/api/donation', donationController.CreateDonation);
    //? =========== UPDATE ==========
    app.patch('/api/donation/:id', donationController.updateExistingDonation);
    //? =========== DELETE ==========
    app.delete('/api/donation/:id', donationController.deleteDonation);
    //? Get all donations by user id
    app.get('/api/user/donation/:id', donationController.AllDonationByUserId);
    //? create donation by user id
    app.post('/api/user/donation/:id', donationController.addDonation);
}