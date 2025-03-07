import React, { useEffect, useState } from 'react'
import './homePage.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
const HomePage = ({ sideNavbar }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/allVideo').then(res => {
      console.log(res.data.videos)
      setData(res.data.videos);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  const options = ["All", "Twenty20 Cricket", "Music", "Live", "Mixes", "Gaming", "Debates", "Coke Studio Pakistan", "Democracy", "Pakistani dramas", "Comedy", "Pakistani dramas", "Comedy", "Pakistani dramas", "Comedy",];

  return (
    <div className={sideNavbar ? 'homePage' : 'fullHomePage'}>

      <div className="homePage_options">
        {
          options.map((item, index) => {
            return (
              <div key={index} className="homePage_option">
                {item}
              </div>
            );
          })
        }
      </div>


      <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>

        {
          data?.map((item, ind) => {
            return (
              <Link to={`/watch/${item._id}`} className="youtube_Video">

                {/* Please watch the video for the code} */}

              </Link>
            );
          })
        }







      </div>



    </div>
  )
}

export default HomePage