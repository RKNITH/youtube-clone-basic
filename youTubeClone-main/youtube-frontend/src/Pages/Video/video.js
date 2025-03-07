import React, { useState, useEffect } from 'react'
import './video.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify'
const Video = () => {
    const [message, setMessage] = useState("");
    const [data, setData] = useState(null);
    const [videoUrl, setVideoURL] = useState("");
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    const fetchVedioById = async () => {
        await axios.get(`http://localhost:4000/api/getVideoById/${id}`).then((response) => {
            console.log(response.data.video);
            setData(response.data.video)
            setVideoURL(response.data.video.videoLink)
        }).catch(err => {
            console.log(err);
        })
    }

    const getCommentByVideoId = async () => {
        await axios.get(`http://localhost:4000/commentApi/comment/${id}`).then((response) => {
            console.log(response);
            setComments(response.data.comments)
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        fetchVedioById();
        getCommentByVideoId();
    }, [])

    const handleComment = async()=>{
        const body = {
            "message":message,
            "video":id
        }
        await axios.post('http://localhost:4000/commentApi/comment',body, { withCredentials: true }).then((resp)=>{
            console.log(resp)
            const newComment = resp.data.comment;
            setComments([newComment,...comments]);
            setMessage("")
        }).catch(err=>{
            toast.error("Please Login First to comment")
        })
    }
    return (
        <div className='video'>
            <div className="videoPostSection">
                <div className="video_youtube">
                    {data && <video width="400" controls autoPlay className='video_youtube_video'>

                        {/* Please watch the video for the code} */}
                    </video>}

                </div>

                <div className="video_youtubeAbout">
                    <div className="video_uTubeTitle">{data?.title}</div>

                    <div className="youtube_video_ProfileBlock">
                        <div className="youtube_video_ProfileBlock_left">
                            <Link to={`/user/${data?.user?._id}`} className="youtube_video_ProfileBlock_left_img">
                                <img className='youtube_video_ProfileBlock_left_image' src={data?.user?.profilePic} />
                            </Link>
                            <div className="youtubeVideo_subsView">
                                <div className="youtubePostProfileName"> {data?.user?.channelName} </div>
                                <div className="youtubePostProfileSubs">{data?.user?.createdAt.slice(0, 10)}</div>
                            </div>
                            <div className="subscribeBtnYoutube">Subscribe</div>
                        </div>

                        <div className="youtube_video_likeBlock">
                            {/* Please watch the video for the code} */}



                        </div>


                    </div>

                    <div className="youtube_video_About">
                        <div>{data?.createdAt.slice(0, 10)}</div>
                        <div>{data?.description}</div>
                    </div>
                </div>

                <div className="youtubeCommentSection">
                    <div className="youtubeCommentSectionTitle">{comments.length} Comments</div>

                    <div className="youtubeSelfComment">
                        {/* Please watch the video for the code} */}

                    </div>

                    <div className="youtubeOthersComments">

                        {
                            comments.map((item, index) => {
                                return (
                                    <div className="youtubeSelfComment">
                                        <img className='video_youtubeSelfCommentProfile' src={item?.user?.profilePic} />
                                            {/* Please watch the video for the code} */}


                                    </div>
                                );
                            })
                        }




                    </div>
                </div>
            </div>

            <div className="videoSuggestions">

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>
            </div>

            <ToastContainer/>

        </div>
    )
}

export default Video