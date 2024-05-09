const sponsorControllers = require('../controllers/sponsor.controller');

module.exports = (app) => {
    //? =========== READ ALL ==========
    app.get('/api/sponsor', sponsorControllers.AllSponsor);
    //? =========== READ ONE ==========
    app.get('/api/sponsor/:id', sponsorControllers.findOneSponsor);
    //? =========== CREATE ==========
    app.post('/api/sponsor/new', sponsorControllers.CreateSponsor);
    //? =========== UPDATE ==========
    app.patch('/api/sponsor/:id', sponsorControllers.updateExistingSponsor);
    //? =========== DELETE ==========
    app.delete('/api/sponsor/:id', sponsorControllers.deleteSponsor);

}