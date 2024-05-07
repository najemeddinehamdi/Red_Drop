import React from 'react'
import { Link } from 'react-router-dom'

export const Statistcs = () => {
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
            <div>
                <div className='table-a'>
                    <div className='items'>
                        <div className='Acc-manage'><img src="ManageAc.png" alt="" className='manage' /><h4>Manage Account</h4></div>
                        <div className='Acc-manage'><img src="statistics.jpg" alt="" className='manage' /><h4>Statistics</h4></div>
                        <div className='Acc-manage'><img src="donnerCard.jpg" alt="" className='manage' /><h4>Donner Card</h4></div>
                        <div className='Acc-manage'><img src="rewardPo.png" alt="" className='manage' /><h4>Rewards Points</h4></div>
                    </div>
                    <div className='statistcs'>
                        <div className='history'>
                            <h2>Donation History:</h2>
                            <table>
                                <thead>
                                    <tr>Donation date: Wednesday, Apr 24, 2024</tr>
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
        </div>
    )
}

export default Statistcs