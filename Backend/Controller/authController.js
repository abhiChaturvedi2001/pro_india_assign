import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User from "../Model/userModel.js"

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // check the  user is already register or not 
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(409).json({
                message: "Account Already Exist",
                success: false
            })
        }

        // if use is new then create a new account and hash the password
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({ name, email, password: hashedPassword });
        return res.status(200).json({
            message: "Account Created Successfully",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        })
    }
}


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Email / Password are not valid ",
                success: false
            })
        }

        const isPassMatch = await bcrypt.compare(password, user.password);
        if (!isPassMatch) {
            return res.status(400).json({
                message: "Email / Password are not valid ",
                success: false
            })
        }

        // now send the jwt token to the cookies
        const jwtToken = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "24h"
        })

        return res.status(200).cookie("jwt", jwtToken, { httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000 }).json({
            message: "User Logged in Successfully",
            success: true,
            username: user.name
        })

    } catch (error) {
        return res.status(500).json({
            message: error,
            success: false
        })
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        return res.status(200).json({ message: "logged out success", success: false })
    } catch (error) {
        console.log(error.message)
    }
};

export const getUser = async (req, res) => {
    try {
        const id = req.user.id;
        const user = await User.findById(id);
        return res.status(200).json({
            message: `Hey ${user.name}`,
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: `internal error`,
            success: false
        })
    }
}