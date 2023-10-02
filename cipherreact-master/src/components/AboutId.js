import React from 'react'
import {useParams,useLocation, Link, useNavigate} from 'react-router-dom'
function AboutId() {
    //just retrive a particular parameter mentioned in the route of app.js
    const {aboutId} = useParams();
    console.log(aboutId);
    // retreive entire parameter
    let {pathname} = useLocation();
    let navigate = useNavigate();
    // console.log(location);
  return (
    <div>
        <button onClick={()=>{navigate('/about/')}}>Home</button>
    </div>
  )
}

export default AboutId