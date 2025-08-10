import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc Auth user/ set token
// route POST api/users/auth
// @access public
const authUser = asyncHandler((req, res)=>{ //asyncHandler is used to avoid repetetive try/catch
    res.status(200).json({message: "auth user"})
})

// @desc Register a new user
// route POST api/users/
// @access public
const registerUser = asyncHandler(async(req, res) => {
    res.status(200).json({message: "register user"})
})

// @desc Logout a user
// route POST api/users/logout
// @access public
const logoutUser = asyncHandler(async(req, res) => {
    res.status(200).json({message: "logout user"})
})

// @desc Get profile of the user
// route GET api/users/profile
// @access private
const getUserProfile = asyncHandler(async(req, res) => {
    res.status(200).json({message: "user profile"})
})

// @desc Get profile of the user
// route PUT api/users/profile
// @access private
const updateUserProfile = asyncHandler(async(req, res) => {
    res.status(200).json({message: "update user profile"})
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};