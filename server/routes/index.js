const express = require("express");
const registerUser = require("../controllers/registerUser");
const checkEmail = require("../controllers/checkEmail");
const checkPassword = require("../controllers/checkPassword");
const userDetails = require("../controllers/userDetails");
const logout = require("../controllers/logout");
const updateUser = require("../controllers/updateUserDetails");

const router = express.Router();

router.post("/register", registerUser);
router.post("/email", checkEmail);
router.post("/password", checkPassword);
router.get("/user-details", userDetails);
router.get("/logout", logout);
router.get("/update-user", updateUser);
module.exports = router;
