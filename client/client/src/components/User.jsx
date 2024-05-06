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
        <div className='second-part'>
              <div className='text'><h2>Donation</h2>
              </div>
              <div className='text'><h2 >Next Donation</h2>
              </div>
              <div className='text'><h2>Reward Points  </h2></div>
        </div>
        <div className='table'>
            
              <div className='items'>
                <div className='Acc-manage'><img src="ManageAc.png" alt=""  className='manage'/><h4>Manage Account</h4></div>
                <div className='Acc-manage'><img src="statistics.jpg" alt="" className='manage'/><h4>Statistics</h4></div>
                <div className='Acc-manage'><img src="donnerCard.jpg" alt="" className='manage' /><h4>Donner Card</h4></div>
                <div className='Acc-manage'><img src="rewardPo.png" alt="" className='manage' /><h4>Rewards Points</h4></div>
              </div>
            
            <div className='user-name'>
              <img src="user.png" alt="" className='user' />
              
              <div>
                <h4 className='details-1'>User Name : xxxxx</h4>
              <h4>Blood Donner ID : xxxxxx</h4>
              <h4>Blood groupe: xxxxxx</h4>
              </div>
              
            </div>
            <div className='about-y'>
            <h3>About You:</h3>
            <div>
              <h6>First Name :
                xxxxxx </h6>
                <h6>Last Name :
                xxxxxx
              </h6>
              <h6>Age : xx</h6>
              <h6>Occupation : xxxxx </h6>
              <h6>Status: xxxxxx</h6>
              </div>
            </div>
            <div className='contact-info'>
              <div>
              <h3>Contact Info:</h3>
              <h6>Email: xxxxx</h6>
              <h6>Country: xxxxx</h6>
              <h6>Department: xxxxxx</h6>
              <h6>City: xxxxxx</h6>
              <h6>Adress : xxxxx </h6>
              <button className='btn btn-primary'>Edit</button>
              </div>
            </div>
        </div>

    </div>
  )
}


export default User