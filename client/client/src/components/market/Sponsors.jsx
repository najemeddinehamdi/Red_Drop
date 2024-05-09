import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header';

const Sponsors = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/user/market')
      }


    return (
        <div className='container'>
            <div className='navbar'>
                <img className='logo' src="../REDDR_2.png" alt="" />
                <div className='btn-c'>
                    <Link >Market Place</Link>
                    <div className="space"></div>
                    <Link to={'/'} className='btn'>Sign Out</Link>
                </div>
            </div>
            <div>
            <Header />
            </div>
            <div className='hale'>
                <img className='banner-1' onClick={handleClick} src="../banner1.png" alt="" />
                <img src="../banner-2.png" className='banner-1' alt="" />
            </div>

        
        
        
        
        
        
        
        </div>
            
            )
}

            export default Sponsors