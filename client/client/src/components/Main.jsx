import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Up from './SignIn'; // Import the Up (SignIn) component for modal sign-in
import Sign from './Sign.up';

const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openSignUpModal = () => {
        setIsSignUpModalOpen(true);
    };

    const closeSignUpModal = () => {
        setIsSignUpModalOpen(false);
    };

    return (
        <div className='container'>
            <div className='navbar'>
                <img className='logo' src="REDDR_2.png" alt="" />
                <div className='btn-c'>
                    <button onClick={openSignUpModal} className='btn'>Sign Up</button>
                    <button onClick={openModal} className='btn'>Sign In</button>
                </div>
            </div>
            <div className='header'>
                <Link to={"/quiz"} className='don'>Can I donate ? </Link>
                <Link to={"/map"} className='location'>Find a Center </Link>
            </div>

            <div className='body'>
                <div className='c' id='c1'>
                    <img className='body-img' src="d.png" alt="" />
                    <h2 className='h-body'>Why donate ?</h2>
                    <div className="information">
                        <p className='p-main'>Your donation changes lives, bringing hope where it's needed most. Join us in making a difference today.</p>
                        <Link className='link' to={"/quiz"}>Book Now</Link>
                    </div>
                </div>
                <div className='c' id='c2'>
                    <img className='body-img' src="a.png" alt="" />
                    <h2 className='h-body'>Blood Type</h2>
                    <div className="information">
                        <p className='p-main'>Blood type (A, B, AB, or O) guides safe transfusions and transplants, crucial for medical procedures, ensuring effective healthcare. </p>
                        <Link className='link' to={"/quiz"}>Book Now</Link>
                    </div>
                </div>
                <div className='c' id='c3'>
                    <img className='body-img' src="b.png" alt="" />
                    <h2 className='h-body'>Donation Process</h2>
                    <div className="information">
                        <p className='p-main'>The donation process comprises registration, medical review, a brief physical, and the donation, usually taking 10-15 minutes.</p>
                        <Link className='link' to={"/quiz"}>Book Now</Link>
                    </div>
                </div>
                <div className='c' id='c4'>
                    <img className='body-img' src="c.png" alt="" />
                    <h2 className='h-body'>Impact of Your Donation</h2>
                    <div className="information">
                        <p className='p-main'>Donations profoundly impact healthcare, saving lives and providing essential resources for medical treatments and emergencies.</p>
                        <Link className='link' to={"/quiz"}>Book Now</Link>
                    </div>
                </div>
            </div>
            {isModalOpen && <Up onClose={closeModal} />} {/* Render the Up (SignIn) component as a modal */}
            {isSignUpModalOpen && <Sign onClose={closeSignUpModal} />} {/* Render the Sign Up modal */}
            <div className='blood-inventory'></div>
        </div>
    )
}

export default Main;
