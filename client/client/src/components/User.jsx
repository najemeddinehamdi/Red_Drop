import React from 'react'
import { Link } from 'react-router-dom'

export const User = () => {
  return (
    <div className='container'>
        <div className='navbar'>
                <img className='logo' src="REDDR_2.png" alt="" />
                <div className='btn-c'>
                    <Link>My acount</Link>
                    <Link>Market Place</Link>
                    <button className='btn'>Sign Out</button>
                </div>
            </div>
    </div>
  )
}


export default User