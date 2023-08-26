const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userServices = require('../services/user.js');
const jwtKey = require('../configs/jwtKey.js');
const secretKey = jwtKey.secretKey;

exports.loginUser = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await userServices.getUserByUserName(userName);
        if (!user) {
            res.status(401).json({ message: "User not found" });
        }
        else {
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                res.status(401).json({ message: "userName or password wrong!" });
            }
            else{
                const userId = user._id;
                const token = jwt.sign({id: userId, userName: userName}, secretKey);
                res.status(200).json({message: "login success", token: token});
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error!" })
    }
}