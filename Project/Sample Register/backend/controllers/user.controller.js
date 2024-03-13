const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');
const json= require('jsonwebtoken');

const register = async (req, res) => {

    const { name, email, username, password } = req.body;
    if (!name || !email || !username || !password) {
        return res.status(403).send({ message: "All Fields are mandatory" })
    }
    let user = await UserModel.findOne({ email });
    if (user) {
        return res.status(403).send({ message: "EmailId is already registered" })
    }
    user = await UserModel.findOne({ username });
    if (user) {
        return res.status(403).send({ message: "Username is already taken, try with another" })
    }
    const hashPWd = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, username, password: hashPWd });
    const resp = await newUser.save();
    return res.status(201).send({ message: "User Registered Successfully" })
}

const login = async (req, res) => {
    const { email, password } = req.body;
    //validating blank data
    if (!email || !password) {
        return res.status(403).send({ message: "Email and Password required" })
    }
    //check for registered user
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(403).send({ message: "EmailId is not registered with us" })
    }
    const verify = await bcrypt.compare(password, user.password);
    const payload = { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
        username: user.username 
    };
    if (verify) {
        const token= await json.sign(payload,process.env.JWT_SECRET);
        return res.status(200).send({ message: "User LoggedIn successfully", payload, token})
    } else {
        return res.status(403).send({ message: "Invalid Credentials" })
    }
}
module.exports = { register, login }