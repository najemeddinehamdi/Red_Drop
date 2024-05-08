import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';


export const User = () => {

  const [infoToShow, setInfoToShow] = useState('');

  // Function to handle click on each link
  const handleLinkClick = (info) => {
    setInfoToShow(info);
  };

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
      <div className='second-part'>
        <div className='text'><h2>Donation</h2>
        </div>
        <div className='text'><h2 >Next Donation</h2>
        </div>
        <div className='text'><h2>Reward Points  </h2></div>
      </div>
      <div className='table-a'>

        <div className='items'>
          <div className='Acc-manage'><img src="us.png" alt="" className='manage' /><Link className='element-item' onClick={() => handleLinkClick('manageAccount')}>Manage Account</Link></div>
          <div className='Acc-manage'><img src="stats.png" alt="" className='manage' /><Link className='element-item' onClick={() => handleLinkClick('statistics')}>Statistics</Link></div>
          <div className='Acc-manage'><img src="credit-card.png" alt="" className='manage' /><Link className='element-item' onClick={() => handleLinkClick('donnerCard')}>Donner Card</Link></div>
          <div className='Acc-manage'><img src="badge.png" alt="" className='manage' /><Link className='element-item' onClick={() => handleLinkClick('rewardsPoints')}>Rewards Points</Link></div>
        </div>

 {/* Conditional rendering based on infoToShow state */}
 {infoToShow === 'manageAccount' && (
          <div className='manage-account-info'>
            <div className='user-name'>
              <img src="profile.png" alt="" className='user' />
              <div className='blood-details'>
                <h5 className='element'>User Name: xxxxx</h5>
                <h5 className='element'>Blood Donner ID: xxxxxx</h5>
                <h5 className='element'>Blood group: xxxxxx</h5>
              </div>
            </div>
            <div className='about-y'>
              <h3 className='details-user'>About You:</h3>
              <div>
                <h6 className='element'>First Name: xxxxxx</h6>
                <h6 className='element'>Last Name: xxxxxx</h6>
                <h6 className='element'>Age: xx</h6>
                <h6 className='element'>Occupation: xxxxx</h6>
                <h6 className='element'>Status: xxxxxx</h6>
              </div>
            </div>
            <div className='contact-info'>
              <div>
                <h3 className='details-user'>Contact Info:</h3>
                <h6 className='element'>Email: xxxxx</h6>
                <h6 className='element'>Country: xxxxx</h6>
                <h6 className='element'>Department: xxxxxx</h6>
                <h6 className='element'>City: xxxxxx</h6>
                <h6 className='element'>Address: xxxxx </h6>
                <button className='btn btn-primary'>Edit</button>
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
          <h6>first name</h6>
          <h6>last name</h6>
          <h2>Donner ID</h2>
        </div>
      )}
      {infoToShow === 'rewardsPoints' && (
        <div className='rewards-points-info'>
          
        </div>
      )}
      </div>

    </div>
  )
}


export default User