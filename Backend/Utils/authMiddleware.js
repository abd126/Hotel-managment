const jwt = require("jsonwebtoken");

const authMiddleWare = (req, res, next) => {
  const token = req.cookies.token;

  jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
    console.log(decoded, "decoded");
    req.body.decoded = decoded;
    const userRole = decoded.role;
    if (!err && userRole === "admin") {
      next();
    } else {
      res.json({ message: "UnAuth" });
    }
  });
};

module.exports = {
  authMiddleWare
};