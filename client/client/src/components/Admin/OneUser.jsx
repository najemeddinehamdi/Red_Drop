import React from 'react'
import OneUserInfo from './OneUserInfo';
import NavbarAdmin from './NavbarAdmin';
import OneUserDonations from './OneUserDonations';
import { useParams } from 'react-router-dom'
import "../Admin/OneUser.css"
import Modal  from "../Admin/Modal"; 
import { useState } from 'react'

const OneUser = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => {
    setModalOpen(true);
    };

    const handleModalClose = () => {
    setModalOpen(false);
    };


    return (
    <div className='container'>
        <div className="row">
            <NavbarAdmin />
            <div className="d-flex justify-content-between">
                <h1 className='text-center Userinfo'>User Information</h1>
                <button className='btn btn-primary' onClick={()=>setModalOpen(true)}>Add Donation</button>
            </div>
            <div className='d-flex'>
                <div className="col-6 userInfo">
                    <OneUserInfo />
                </div>
                <div className="col-6 donation ">
                    <OneUserDonations />
                </div>
            </div>
        </div>
        {modalOpen && (
        <Modal onClose={handleModalClose} />
        )}
    </div>
    )
}

export default OneUser