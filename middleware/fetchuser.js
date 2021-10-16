var jwt = require('jsonwebtoken');
const JWT_SECRET = "Godisgood";

const fetchuser = (req, res, next) => {
    console.log("fetchuser runs")
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        console.log(JWT_SECRET)
        const data = jwt.verify(token, JWT_SECRET);
        console.log(data.user);
        req.user = data;
        console.log(req.user)
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchuser;