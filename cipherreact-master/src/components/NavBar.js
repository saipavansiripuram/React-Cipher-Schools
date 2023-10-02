import React from 'react'
import {Para} from './Cipher'
import {Link} from 'react-router-dom'
function NavBar({cname,home,about,contact}) {
  return (
    <div>
        <div className='header'>
            <div className='leftHeader'>
                <h2>Cname</h2>
            </div>
            <p>Unknown</p>
            <div className='rightHeader'>
                <p><a href='/counter'>Home</a></p>
                <p>
               <Link to='/about/712381263'>about</Link>   </p>
                <p>contact</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar