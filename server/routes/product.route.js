const productControllers = require("../controllers/product.controller")


module.exports = (app) => {
        //? =========== READ ALL ==========
        app.get("/api/product", productControllers.findAll);
        //? =========== READ ONE ==========
        app.get('/api/product/:id', productControllers.getOne);
}