const productControllers = require("../controllers/product.controller")


module.exports = (app) => {
        //? =========== READ ALL ==========
        app.get("/api/product", productControllers.AllProduct);
        //? =========== READ ONE ==========
        app.get('/api/product/:id', productControllers.findOneProduct);
        //? =========== CREATE ==========
        app.post('/api/product/new', productControllers.CreateProduct);
        //? =========== UPDATE ==========
        app.patch('/api/product/:id', productControllers.updateExistingProduct);
        //? =========== DELETE ==========
        app.delete('/api/product/:id', productControllers.deleteProduct);
        //? ===========get all products with sponsor id=================
        app.get('/api/product/sponsor/:id', productControllers.AllSponsorProduct);
        

}