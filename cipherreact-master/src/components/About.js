import React from 'react'
import { useLocation, Link, useParams } from 'react-router-dom';
import AboutId from './AboutId';


function About() {
const location = useParams();
console.log(location);
  return (
    <div>
      <Link to={'/'}>
        <AboutId/>
      </Link>
    </div>
  )
}

export default About