const Video = require('../Modals/video');


exports.uploadVideo = async (req,res)=>{
    try{
        const { title, description, videoLink, videoType,thumbnail }  = req.body;
        
         // please watch the video for the code

        res.status(201).json({ sucess: "true", videoUpload });


    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}


exports.getAllVideo = async(req,res)=>{
    try{
        const videos = await Video.find().populate('user','channelName profilePic userName createdAt');
         // please watch the video for the code
        res.status(201).json({ sucess: "true", "videos": videos });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

exports.getVideoById = async (req,res)=>{
    try{
        let {id} = req.params;
         // please watch the video for the code

        res.status(201).json({ sucess: "true", "video": video });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

exports.getAllVideoByUserID = async(req,res)=>{
    try{
        let {userId} = req.params;
        const video = await Video.find({user:userId}).populate('user','channelName profilePic userName createdAt about');
        res.status(201).json({ sucess: "true", "video": video });

    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}
