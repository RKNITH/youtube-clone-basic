import React, { useState } from 'react'
import './signUp.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const SignUp = () => {
    const [uploadedImageUrl, setUploadedImageUrl] = useState("https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain");
    const [singUpFiled, setSignUpField] = useState({ "channelName": "", "userName": "", "password": "", "about": "", "profilePic": uploadedImageUrl });
    const [progressBar,setProgressBar] = useState(false);
    const navigate = useNavigate();
    const handleInputFiled = (event, name) => {
        setSignUpField({
            ...singUpFiled, [name]: event.target.value
        })
    }
    console.log(singUpFiled)

    const uploadImage = async (e) => {
        console.log("Uploading")
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        // youtube-clone
        data.append('upload_preset', 'youtube-clone');
        try {
            // cloudName="dhlklhfgj"
            setProgressBar(true)
            const response = await axios.post("https://api.cloudinary.com/v1_1/dhlklhfgj/image/upload", data)
            setProgressBar(false)
            const imageUrl = response.data.url;
            setUploadedImageUrl(imageUrl);
            setSignUpField({
                ...singUpFiled, "profilePic": imageUrl
            })
        } catch (err) {
            console.log(err)
        }


    }
    const handleSignup = async () => {
        {/* Please watch the video for the code} */}
    }



    return (
        <div className='signUp'>
            <div className="signup_card">
                <div className="signUp_title">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
                    SignUp
                </div>

                <div className="signUp_Inputs">
                    
                    {/* Please watch the video for the code} */}


                    <div className="image_upload_signup">
                        <input type='file' onChange={(e) => uploadImage(e)} />
                        <div className='image_upload_signup_div'>
                            <img className='image_default_signUp' src={uploadedImageUrl} />
                        </div>
                    </div>


                    <div className="signUpBtns">
                        <div className="signUpBtn" onClick={handleSignup}>SignUp</div>
                        <Link to={'/'} className="signUpBtn">Home Page</Link>

                    </div>

                    {progressBar && <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>}

                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default SignUp