// -------------------------------------------------------------------------------------
const express = require("express");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const asyncHandler = require("express-async-handler"); // to prevent try catch blocks
const user_model = require("../models/user_model");
const token_model = require("../models/token_model");
const crypto = require("crypto"); 
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// This is used to ensure user logs out automatically after 1 day of logging in
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"});
};
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
const RegisterUser = asyncHandler(async (req, resp) => {
    const {name, email, password} = req.body;

    // Validation if user enters an empty string
    if (!name || !password || !email){
        resp.status(400);
        throw new Error("Please fill in all the required fields.");
    }

    // Validation if user enters short password
    if (password.length < 8){
        resp.status(400);
        throw new Error("Password must be at least 8 charachters");
    }

    // Check if user email already exists
    const userExists = await user_model.findOne({email});
    if (userExists) {
        resp.status(400);
        throw new Error("Email is already in use.");
    };

    // Create new user if they do not exist in Database
    const user = await user_model.create({
        name: name,
        email: email,
        password: password
    });

    // Generate token
    const token = generateToken(user._id);

    // Send http only cookie
    resp.cookie("Token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
        sameSite: "none",
        secure: true
    });
 
    // Get the details of the user when account is created
    if (user){
        resp.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            token
        })
    }
    else{
        resp.status(400);
        throw new Error("Invalid User Data");
    }
});
// -------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------
// Login user
const LogInUser = asyncHandler(async (req, resp) => {
    const {email, password} = req.body;

    // Validation if user enters an empty string
    if (!password || !email){
        resp.status(400);
        throw new Error("Please fill in all the required fields.");
    }

    // Check if user email already exists
    const user = await user_model.findOne({email});

    if (!user) {
        resp.status(400);
        throw new Error("User not found please sign up!");
    };

    // Validation if user enters password and it is correct or not
    const passwordisCorrect = await bcryptjs.compare(password, user.password);

    // Generate token
    const token = generateToken(user._id);

    // Send http only cookie
    resp.cookie("Token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
        sameSite: "none",
        secure: true
    });

    if (user && passwordisCorrect){
        resp.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            token
        });
    }
    else{
        resp.status(400);
        throw new Error("Invalid Email or Password");
    }
});
// -------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------
const LogOut = asyncHandler(async (req, resp) => {
    // Send http only cookie
    resp.cookie("Token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        sameSite: "none",
        secure: true
    });

    return resp.status(200).json({
        message: "Succesfully Logged Out",
    })
});
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
const FetchData = asyncHandler(async(req, resp) => {
    const user = await user_model.findById(req.user._id);

    if (user){
        resp.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
    }
    else{
        resp.status(400);
        throw new Error("User not found");
    }

});
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
const LoginStatus = asyncHandler(async(req, resp) => {
    const token = req.cookies.Token;

    if (!token){
        return resp.json(false);
    }
   
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified){
        return resp.json(true);
    }
    else{
        return resp.json(false);
    }

});
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
const UpdateUser = asyncHandler(async(req, resp) => {
    const user = await user_model.findById(req.user._id);

    if (user){
        const {name, email, photo, phone, bio} = user;
        user.email = email // Can't change email 
        user.name = req.body.name || name; // second option if no name added by user

        const updateduser = await user.save();
        resp.status(200).json({
            _id: updateduser.id,
            name: updateduser.name,
            email: updateduser.email,
            password: updateduser.password,
        })
    }
    else{
        resp.status(404);
        throw new Error("User not found");
    };
});
// -------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
const ChangePassw = asyncHandler(async(req, resp) => {
    const user = await user_model.findById(req.user._id);
    const {oldPassword, password} = req.body

    if(user){
        if (!oldPassword || !password){
            resp.status(404);
            throw new Error("Please add old and new password");
        }

        // check if old password exists in database
        const passwordiscorrect = await bcryptjs.compare(oldPassword, user.password);
        
        //Save new password
        if (passwordiscorrect){
            user.password = password;
            await user.save();
            resp.status(200).send("Password Changed Successfully");
        }
        else{
            resp.status(404);
            throw new Error("Passwords do not match");
        }
    }
    else{
        resp.status(404);
        throw new Error("User not found");
    }
});
// -------------------------------------------------------------------------------------

 

// -------------------------------------------------------------------------------------
const resetPassword = asyncHandler(async(req, resp) => {
    const {password} = req.body;
    const {resetToken} = req.params;

    // Hash again as db contains an already hashed code
    const hashed_token = crypto.createHash("sha256").update(resetToken).digest("hex");

    // Find Token in db
    const userToken = await token_model.findOne({
        token: hashed_token,
        expiresAt: {$gt: Date.now()}

    });

    if (!userToken){
        resp.status(404);
        throw new Error("User token found");
    }
    
    // Find user
    const user = await user_model.findOne({_id: userToken.userId});
    user.password = password;

    await user.save();
    resp.status(200).json({
        message: "Password Reset Successful"
    })
});
// -------------------------------------------------------------------------------------
 
// -------------------------------------------------------------------------------------
module.exports = {
    RegisterUser,
    LogInUser,
    LogOut,
    FetchData,
    LoginStatus,
    UpdateUser,
    ChangePassw, 
    resetPassword
};
// -------------------------------------------------------------------------------------