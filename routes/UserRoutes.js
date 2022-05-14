const express = require('express');
const authModule = require ('../Module/authModule')
const  protect = require ('../middleware/authMiddleware.js')
var router = express.Router();

// router.route("/register").post(registerUser);
// router.post("/login", authUser);
// router.route("/profile").post(protect, updateUserProfile);



router.post("/register",authModule.registerUser);

router.post("/login",authModule.authUser);
router.post("profile",protect,updateUserProfile)



module.exports = router;