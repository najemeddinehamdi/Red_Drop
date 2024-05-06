const UserController = require("../controllers/user.controller");
const { authenticate } = require("../config/Jwt.config");

//! ==========Routes==========
module.exports = (app) => {
        //?==========Create==========
        app.post("/api/register", UserController.register);
        app.post("/api/login", UserController.login);
        app.post("/api/logout", UserController.logout);

        //?==========Read ALL==========
        app.get("/api/signup", UserController.AllUsers);
        //   //?==========Read One Single User==========
        app.get("/api/signup/:id", UserController.findOneSingleUser);

        //   //?==========Update Data==========
        app.patch("/api/signup/:id", UserController.updateExistingUser);

        //   //?==========Deleting Data==========
        app.delete("/api/signup/:id", UserController.deleteAnExistingUser);
};