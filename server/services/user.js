const User = require('../models/user.js');

exports.getUserByUserName = async (userName) =>{
    try{
        const user = await User.findOne({
            userName: userName
        });
        return user;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

exports.createUser = async (userName, userPass) =>{
    try{
        const newUser = new User;
        newUser.userName = userName;
        newUser.password = userPass;
        
        const createdUser = await newUser.save();
        return createdUser;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}
