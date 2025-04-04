const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const jwt_secret = "my_key";
router.get("/test", (req, res) => {
    res.json({message: "Hey! This one works fine!!"})
})

router.post("/signup", async (req, res) => {
    console.log("Hey! I am triggered")
    try{
        const {username, email, password} = req.body;
        //check for existing users 
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({username, email, password: hashedPassword}); //new user created
    await newUser.save();
    res.json({message: "User created successfully"});
    }catch(err){
        console.log(err)
    }
})

router.post("/login", async (req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message: "User not found"});
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) return res.json({message: "Invalid password"});

         // Generate JWT token
        const token = jwt.sign({ userId: user._id }, "yourSecretKey", { expiresIn: "1h" });

        res.json({ message: "Login successful!", token });

    }catch(err){
        console.log(err)
    }

})
module.exports = router;