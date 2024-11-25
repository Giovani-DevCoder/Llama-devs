const express = require('express');
const router = express.Router();

const userSignUpController = require('../controller/userSignUp');
const userLoginController = require('../controller/userSignIn');
const userDetailsController = require('../controller/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/userLogout');

router.post("/signup", userSignUpController);
router.post("/login", userLoginController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout",userLogout)

module.exports = router;