import React from 'react'

import { Link } from 'react-router-dom'
import { useState,  } from 'react';
import Header from './Header';



export const User = () => {


  const [infoToShow, setInfoToShow] = useState('');
  

 
  const handleLinkClick = (info) => {
    setInfoToShow(info);
  };

  return (

    <div className='container'>

      <div className='navbar'>
        <img className='logo' src="REDDR_2.png" alt="" />
        <div className='btn-c'>
          <Link to={"/user/sponsor"}>Market Place</Link>
          <div className="space"></div>
          <Link to={'/'} className='btn'>Sign Out</Link>
        </div>
      </div>
      <Header />
      <div className='table-a'>

        <div className='items'>
          <div className='Acc-manage'><img src="us.png" alt="" className='manage' /><Link className='element-item' onClick={() => handleLinkClick('manageAccount')}>Manage Account</Link></div>
          <div className='Acc-manage'><img src="stats.png" alt="" className='manage' /><Link className='element-item' onClick={() => handleLinkClick('statistics')}>Statistics</Link></div>
          <div className='Acc-manage'><img src="credit-card.png" alt="" className='manage' /><Link className='element-item' onClick={() => handleLinkClick('donnerCard')}>Donor Card</Link></div>
          <div className='Acc-manage'><img src="badge.png" alt="" className='manage' /><Link className='element-item' onClick={() => handleLinkClick('rewardsPoints')}>Reward Points</Link></div>
        </div>
        
        {/* Conditional rendering based on infoToShow state */}
        {infoToShow === 'manageAccount' && (
          <div className='manage-account-info'>
            <div className='user-name'>
              <img src="profile.png" alt="" className='user' />
              <div className='blood-details'>
                <h5 className='element'>User Name: bile ladher</h5>
                <h5 className='element'>Blood Donner ID:99df8x26aa </h5>
                <h5 className='element'>Blood group: A+</h5>
              </div>
            </div>
            <div className='about-y'>
              <h3 className='details-user'>About You:</h3>
              <div>
                <h6 className='element'>First Name: bile</h6>
                <h6 className='element'>Last Name: ladhar</h6>
                <h6 className='element'>Age: 32</h6>
                <h6 className='element'>Occupation: developer</h6>
                <h6 className='element'>Status: single</h6>
              </div>
            </div>
            <div className='contact-info'>
              <div>
                <h3 className='details-user'>Contact Info:</h3>
                <h6 className='element'>Email: bilel@gmail.com</h6>
                <h6 className='element'>Country: tunisia</h6>
                <h6 className='element'>Department: sfax</h6>
                <h6 className='element'>City: sfax</h6>
                <h6 className='element'>Address: centre-ville </h6>
                <button className='btn btn-primary' >Edit</button>
              </div>
            </div>
          </div>
        )}
        {/* Conditional rendering based on infoToShow state */}
        {infoToShow === 'statistics' && (
          <div className='statistics-info'>
            <div className='table-b'>
              <div className='statistcs'>
                <div className='history'>
                  <h2>Donation History:</h2>
                  <table>
                    <thead>
                      <th>Donation date: Wednesday, Apr 24, 2024</th>
                    </thead>
                    <tbody>
                      <td>Donation Type: blood</td>
                      <td>Donation Type: blood</td>
                    </tbody>
                    <tbody>
                      <td>Donation Type: blood</td>
                      <td>Donation Type: blood</td>
                    </tbody>
                  </table>
                </div>
                <div className='s'>
                  <img className='stat' src="stat1.png" alt="" />
                  <img className='stat' src="stat2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        )}
        {infoToShow === 'donnerCard' && (
          <div className='cart-info' >
            <h2>Donation</h2>
            <h6>bilel</h6>
            <h6>ladhar</h6>
            <h2>99df8x26aa</h2>
          </div>
        )}
        {infoToShow === 'rewardsPoints' && (
          <div className='rewards-points-info'>
            <img className='reward-img' src="Beginner_1.png" alt="" />
            <div className='all1'>
              <div>
                <h2>Number de donation: 3</h2>
                <h2>Rank: newbie</h2>
                <h2>point ratio : 1</h2>
                </div>
              <div>
                <h2>Badgees:</h2>
                <img className='red' src="red.png" alt="" />
              </div>
            </div>
          </div>
        )}
        
      </div>
      <img className='stock' src="stock.png" alt="" />
    </div>
  )
}


export default User