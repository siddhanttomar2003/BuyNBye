const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { User } = require("../module/user.model");
const { errorhandler } = require("../utils/error");


const AuthMiddleware = async function (req, res, next) {
  // Apply cookie-parser middleware to parse cookies
  const { token } = req.cookies;
  // console.log(token);
  if (!token) {
    // Pass error to the next middleware
    return next(errorhandler(402, "UnAuthorized User"));
  }

  try {
    // Verify the token and decode it
    const decoded = jwt.verify(token, config.TOKEN_SECRET);
    // Find user by decoded user ID
    req.User = await User.findById(decoded.UserId);
    next();
  } catch (error) {
    console.log("Invalid Token Access (Inside the Middleware");
    res.status({})
    next(error);
  }
};

module.exports = {
  AuthMiddleware,
};