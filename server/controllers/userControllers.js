const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require('../models/userModels');
const HttpError = require("../models/errorModel");

// POST: api/users/signup
const signupUser = async (req, res, next) => {
    try {
        const { username, email, password, confirmPassword } = req.body;

        if (!username || !email || !password || !confirmPassword) {
            return next(new HttpError("Fill in all fields", 422));
        }

        const newEmail = email.toLowerCase(); // Fix: Correct method name

        const emailExists = await User.findOne({ email: newEmail });
        if (emailExists) {
            return next(new HttpError("Email already exists.", 422));
        }

        if (password.trim().length < 6) {
            return next(new HttpError("Password should be at least 6 characters.", 422));
        }

        if (password !== confirmPassword) {
            return next(new HttpError("Passwords do not match!", 422));
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        // Create user
        const newUser = await User.create({
            username,
            email: newEmail,
            password: hashedPass
        });

        res.status(201).json(`New user ${newUser.email} registered. `);

    } catch (error) {
        console.error("Error in signupUser:", error);
        return next(new HttpError(error.message || "User Registration failed.", 500));
    }
}




//POST :api/users/login
const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new HttpError("Fill in all fields", 422));
        }

        const newEmail = email.toLowerCase(); 

        const user = await User.findOne({ email: newEmail });
        if (!user) {
            return next(new HttpError("Invalid credentials", 422));
        }

        const comparePass = await bcrypt.compare(password, user.password);
        if (!comparePass) {
            return next(new HttpError("Invalid credentials", 422));
        }

        const { _id: id, username } = user;
        const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Send the correct response with token, id, and username
        res.status(200).json({ token, id, username });
    } catch (error) {
        return next(new HttpError("Login failed. Please check your credentials.", 422));
    }
}






//POST :api/users/profile
//protected
const getUser = async (req, res, next) => {
    res.json("User profile")
}

//POST :api/users/change avatar
//protected
const changeAvatar = async (req, res, next) => {
    res.json("Change Avatar")
}

//POST :api/users/edit user details
//protected
const editUser = async (req, res, next) => {
    res.json("Edit user data")
}

module.exports={signupUser, loginUser, getUser, changeAvatar, editUser}