const productControllers = require("../controllers/product.controller")


module.exports = (app) => {
        //? =========== READ ALL ==========
        app.get("/api/product", productControllers.findAll);
        //? =========== READ ONE ==========
        app.get('/api/product/:id', productControllers.getOne);
        //? =========== CREATE ==========
        app.post("/api/product", productControllers.CreateProduct);
        //? =========== UPDATE ==========
        app.put("/api/product/:id", productControllers.updateExistingProduct);
        //? =========== DELETE ==========
        app.delete("/api/product/:id", productControllers.deleteProduct);
}