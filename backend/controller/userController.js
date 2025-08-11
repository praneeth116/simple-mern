import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Auth user/ set token
// route POST api/users/auth
// @access public
const authUser = asyncHandler(async(req, res)=>{ //asyncHandler is used to avoid repetetive try/catch
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
    else{
        res.status(401);
        throw new Error("Invalid credentials");
    }
})

// @desc Register a new user
// route POST api/users/
// @access public
const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body;
    const userExists = await User.findOne({email: email});
    if (userExists){
        res.status(400);
        throw new Error("User already exists");
    }
    // const hashedPassword = bcrypt.hash(password)
    const user = await User.create({name: name, email: email, password: password});
    if (user){
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    }
    else{
        res.status(400);
        throw new Error("Invalid User data");
    }
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