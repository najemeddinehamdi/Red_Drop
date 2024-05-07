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
        <div className='table-a'>
            
              <div className='items'>
                <div className='Acc-manage'><img src="ManageAc.png" alt=""  className='manage'/><h4 className='element-item'>Manage Account</h4></div>
                <div className='Acc-manage'><img src="statistics.jpg" alt="" className='manage'/><h4 className='element_item'>Statistics</h4></div>
                <div className='Acc-manage'><img src="donnerCard.jpg" alt="" className='manage' /><h4 className='element-item'>Donner Card</h4></div>
                <div className='Acc-manage'><img src="rewardPo.png" alt="" className='manage' /><h4 className='element-item'>Rewards Points</h4></div>
              </div>
            
            <div className='user-name'>
              <img src="user.png" alt="" className='user' />
              
              <div className='blood-details'>
                <h5 className='element'>User Name : xxxxx</h5>
              <h5 className='element'>Blood Donner ID : xxxxxx</h5>
              <h5 className='element'>Blood groupe: xxxxxx</h5>
              </div>
              
            </div>
            <div className='about-y'>
            <h3 className='details-user'>About You:</h3>
            <div>

              <h6 className='element'>First Name :
                xxxxxx </h6>
                <h6 className='element'>Last Name :
                xxxxxx
              </h6>
              <h6 className='element'>Age : xx</h6>
              <h6 className='element'>Occupation : xxxxx</h6>
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
              <h6 className='element'>Adress : xxxxx </h6>
              <button className='btn btn-primary'>Edit</button>
              </div>
            </div>
        </div>

    </div>
  )
}


export default User