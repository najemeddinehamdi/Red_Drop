import React from 'react'
import OneUserInfo from './OneUserInfo';
import NavbarAdmin from './NavbarAdmin';
import OneUserDonations from './OneUserDonations';
import { useParams } from 'react-router-dom'
import "../Admin/OneUser.css"

const OneUser = () => {





  return (
    <div className='container'>
        <div className="row">
            <NavbarAdmin />
            <div className="d-flex justify-content-between">
                <h1 className='text-center'>User Information</h1>
                <button className='btn btn-primary'>Add Donation</button>
            </div>
            <div className='d-flex'>
                <div className="col-6 userInfo">
                    <OneUserInfo />
                </div>
                <div className="col-6 ">
                    <OneUserDonations />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OneUser