const jwt = require("jsonwebtoken");
const secret = "thisascreatkey....shhhhh";

module.exports.secret = secret;

module.exports.authenticate = (req, res, next) => {
    console.log(`|UserToken : ${req.cookies.userToken}`);
    console.log(req.cookies);
    jwt.verify(req.cookies.userToken, secret, (err, payload) => {
        if (err) {
            console.log("this is err :", err);
            res.status(401).json({ verified: false });
        } else {
            console.log("SUCCESS");
            next();
        }
    });
};
