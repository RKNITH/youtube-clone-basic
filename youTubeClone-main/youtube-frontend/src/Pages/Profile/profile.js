import React, { useState, useEffect } from 'react'
import './profile.css';
import SideNavbar from '../../Component/SideNavbar/sideNavbar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = ({ sideNavbar }) => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    const fetchProfileData = async () => {
        {/* Please watch the video for the code} */}

    }
    useEffect(() => {
        fetchProfileData()
    }, [])

    return (
        <div className='profile'>
            <SideNavbar sideNavbar={sideNavbar} />

            <div className={sideNavbar ? "profile_page" : "profile_page_inactive"}>

                <div className="profile_top_section">
                    <div className="profile_top_section_profile">
                        <img className='profile_top_section_img' src={user?.profilePic} alt="" />
                    </div>
                    {/* Please watch the video for the code} */}
                </div>

                <div className="profile_videos">
                    <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon /></div>

                    <div className="profileVideos">


                        {
                            data.map((item, key) => {
                                return (
                                    <Link to={`/watch/${item._id}`} className="profileVideo_block">
                                        {/* Please watch the video for the code} */}
                                    </Link>
                                );
                            })
                        }








                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile