const bcrypt = require('bcrypt')
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotend = require('dotenv').config();
const register = async (req, res) => {
    try {
        console.log(req.body);
        //get Data from the Requet Body
        const { name, username, email, password } = req.body;
        if (!name || !username || !email || !password) {
            return res.status(400).json({
                message: "All Fields are mandatory"
            })
        }
        //check email field must be unique
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User with provided email is already registered"
            })
        }
        user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({
                message: "User with provided username is already registered"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, username, password: hashPassword });
        const resp = await newUser.save();
        res.status(201).json({ message: "User Registered successfully", resp })
    } catch (error) {
        res.status(500).json({ message: "An error eccured while regsitration", error })
    }
}
const login = async (req,res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required.." })
        }
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email Not registered with Us yet.." })
        }
        const match = await bcrypt.compare(password, user.password);
        const payload={
            _id:user._id,
            name:user.name,
            email:user.email
        }
        if (match) {
            const token = await jwt.sign(payload, process.env.JWT_SECRET);
            return res.status(200).json({ message: "Logged in successfully",token })
        } else {
            return res.status(400).json({ message: "Email and password Incorrect.." })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error Occured.." })
    }
}

module.exports = {
    register, login
}