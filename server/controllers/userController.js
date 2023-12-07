import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import User from '../models/user.js';
import config from 'config';

export const signinController = async(req, res) => {
    
    if(req.body.googleAccessToken){
        // google-auth
        const {googleAccessToken} = req.body;

        axios
            .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${googleAccessToken}`
            }
        })
            .then(async response => {
                const firstName = response.data.given_name;
                const lastName = response.data.family_name;
                const email = response.data.email;
                const picture = response.data.picture;

                const existingUser = await User.findOne({email})

                if (!existingUser) 
                return res.status(404).json({message: "User don't exist!"})

                const token = jwt.sign({
                    email: existingUser.email,
                }, config.get("JWT_SECRET"), {expiresIn: "1h"})
        
                res
                    .status(200)
                    .json({result: existingUser, token})
                    console.log("google signin for 1h");
                    
            })
            .catch(err => {
                res
                    .status(400)
                    .json({message: "Invalid access token!"})
            })
    } else{
        // normal-auth
        const {email, password} = req.body;
        if (email === "" || password === "") 
            return res.status(400).json({message: "Invalid field!"});
        try {
            const existingUser = await User.findOne({email})
    
            if (!existingUser) 
                return res.status(404).json({message: "User don't exist!"})
    
            const isPasswordOk = await bcrypt.compare(password, existingUser.password);
    
            if (!isPasswordOk) 
                return res.status(400).json({message: "Invalid credintials!"})
    
            const token = jwt.sign({
                email: existingUser.email,
                id: existingUser._id
            }, config.get("JWT_SECRET"), {expiresIn: "1h"})
    
            res
                .status(200)
                .json({result: existingUser, token})
                console.log("normal signin for 1h");
        } catch (err) {
            res
                .status(500)
                .json({message: "Something went wrong!"})
                console.log(err);
        }
    }
  
}

export const signupController = async(req, res) => {
    if (req.body.googleAccessToken) {
        const {googleAccessToken} = req.body;

        axios
            .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${googleAccessToken}`
            }
        })
            .then(async response => {
                const firstName = response.data.given_name;
                const lastName = response.data.family_name;
                const email = response.data.email;
                const picture = response.data.picture;

                const existingUser = await User.findOne({email})

                if (existingUser) 
                    return res.status(400).json({message: "User already exist!"})

                const result = await User.create({verified:"true",email, firstName, lastName, profilePicture: picture})

                const token = jwt.sign({
                    email: result.email,
                    id: result._id
                }, config.get("JWT_SECRET"), {expiresIn: "1h"})

                res
                    .status(200)
                    .json({result, token})
                    console.log("google signup for 1h");
            })
            .catch(err => {
                res
                    .status(400)
                    .json({message: "Invalid access token!"})

            })

    } else {
        // normal form signup
        const {email, password, confirmPassword, firstName, lastName} = req.body;

        try {
            if (email === "" || password === "" || firstName === "" || lastName === "" && password === confirmPassword && password.length >= 4) 
                return res.status(400).json({message: "Invalid field!"})

            const existingUser = await User.findOne({email})

            if (existingUser) 
                return res.status(400).json({message: "User already exist!"})

            const hashedPassword = await bcrypt.hash(password, 12)

            const result = await User.create({email, password: hashedPassword, firstName, lastName})

            const token = jwt.sign({
                email: result.email,
                id: result._id
            }, config.get("JWT_SECRET"), {expiresIn: "1h"})

            res
                .status(200)
                .json({result, token})
                console.log("normal signup for 1h");
        } catch (err) {
            res
                .status(500)
                .json({message: "Something went wrong!"})
                console.log(err);
        }

    }
}