const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc Register a user
//@route POST /api/users/Register
//@access public
const registerUser = async(req, res) => {
    const { name, author, numberOfPages, email, password } = req.body;
    if (!name || !author || !numberOfPages || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered!");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password: ", hashedPassword);
    const user = await User.create({
        name,
        author,
        numberOfPages,
        email,
        password: hashedPassword,
    });
    console.log(`User created ${user}`);
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("User data is not valaid!");
    }
    res.json({ message: "Register the user" });
};

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = async(req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields must be provided!");
    }
    const user = await User.findOne({ email });
    //compare password with hashedPassword
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    name: user.name,
                    email: user.email,
                    id: user.id,
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "20m" }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
};

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = async(req, res) => {
    res.json(req.user);
};


module.exports = { registerUser, loginUser, currentUser };