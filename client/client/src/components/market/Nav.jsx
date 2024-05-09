import React from 'react';
import '../market/style/market.css'
// import {Link} from 'react-router-dom';

import { Link } from 'react-router-dom';
import Header from '../Header';

const Nav = () => {
    return (
        <>
            <div className='navbar'>
        <img className='logo' src="../REDDR_2.png" alt="" />
        <div className='btn-c'>
          
          <div className="space"></div>
          <Link to={'/'} className='btn'>Sign Out</Link>
        </div>
      </div>
      <Header />
            
        </>
    );
};

export default Nav;
