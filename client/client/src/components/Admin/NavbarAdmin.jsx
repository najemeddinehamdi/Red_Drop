import React from 'react'
import { Link } from 'react-router-dom'
import REDDR_2 from '../../Images/REDDR_2.png'

const NavbarAdmin = () => {
    return (
        <div className='navbar col-12 d-flex '>
            <img className='logo' src={REDDR_2} alt="" />
            <div className='btn-c'>
                <Link to="/admin" className='btn btn-primary'>Users</Link>
                <Link to="/admin/sponsor" className='btn btn-primary'>Sponsors</Link>
            </div>
        </div>
    )
}

export default NavbarAdmin