const User = require('../Modals/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const cookieOptions = {
    httpOnly: true,
    secure: false, // Set to true in production
    sameSite: 'Lax'
  
};

exports.signUp = async(req,res)=>{
    try{
        const { channelName, userName, about, profilePic, password } = req.body;
        const isExist = await User.findOne({ userName });
        
        // please watch the video for the code
        
    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

exports.signIn = async (req,res)=>{
    try{
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        // please watch the video for the code
    } catch (errorMsg){
        res.status(500).json({ error: 'Server error' });
    }
}

exports.logout = async(req,res)=>{
    res.clearCookie('token', cookieOptions).json({ message: 'Logged out successfully' });
}
