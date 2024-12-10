const express = require("express");
const user_model = require("../models/user_model");
const {RegisterUser, UpdateUser, resetPassword, ChangePassw, LogInUser, LogOut, FetchData, LoginStatus} = require("../controllers/user_controller");
const protect = require("../middleware/authMiddleware"); 

const router = express.Router();
 
router.post("/Register", RegisterUser);
router.post("/Login", LogInUser);
router.get("/Logout", LogOut);
router.get("/FetchData", protect, FetchData);
router.get("/LoggedIn", LoginStatus);
router.patch("/UpdateUser", protect, UpdateUser);
router.patch("/ChangePass", protect, ChangePassw); 
router.put("/ResetPassword/:resetToken", resetPassword); 

module.exports = router;