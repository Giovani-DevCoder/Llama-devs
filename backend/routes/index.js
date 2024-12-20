const express = require('express');
const router = express.Router();

const userSignUpController = require('../controller/userSignUp');
const userLoginController = require('../controller/userSignIn');
const userDetailsController = require('../controller/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/userLogout');
const allUsers = require('../controller/allUsers');
const updateUser = require('../controller/updateUser');

router.post("/signup",userSignUpController);
router.post("/login",userLoginController);
router.get("/user-details",authToken,userDetailsController);
router.get("/userLogout",userLogout);

//** admin-panel */
router.get("/all-users",authToken,allUsers);
router.post("/update-user",authToken,updateUser);

module.exports = router;