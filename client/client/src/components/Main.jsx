import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




const Main = () => {

    return (
        <div className='container'>
            <div className='navbar'>
                <img className='logo' src="REDDR_2.png" alt="" />
                <div className='btn-c'>
                    <Link to={"/sign"} className='btn  '>Sign Up</Link>
                    <Link to={"/up"} className='btn  '>Sign In</Link>
                </div>
            </div>
            <div className='header'>
                <div className='don'>Can i donate ? </div>
                <div className='location'>Find a Center<center></center> </div>
            </div>

            <div className='body'>
                <div className='c' id='c1'>
                    <img className='body-img' src="Untitled_design.png" alt="" />
                    <h2 className='h-body'>Why donate ?</h2>
                    <div className="information">
                    <p>Your donation changes lives, bringing hope where it's needed most. Join us in making a difference today.</p>
                    </div>
                </div>
                <div className='c' id='c2'>
                    <img className='body-img' src="a.png" alt="" />
                    <h2 className='h-body'>Blood Type</h2>
                    <div className="information">
                        Additional Information 2
                    </div>
                </div>
                <div className='c' id='c3'>
                    <img className='body-img' src="b.png" alt="" />
                    <h2 className='h-body'>Donation Process</h2>
                    <div className="information">
                        Additional Information 3
                    </div>
                </div>
                <div className='c' id='c4'>
                    <img className='body-img' src="c.png" alt="" />
                    <h2 className='h-body'>Impact of Your Donation</h2>
                    <div className="information">
                        Additional Information 4
                    </div>
                </div>

            </div>

            <div className='blood-invontory'></div>
        </div>
    )
}


export default Main