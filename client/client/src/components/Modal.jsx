import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ setShowModal }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                <p className='pop'>Sorry, you are not eligible to donate blood.&#x1F6D1;</p>
                <Link className='stop' to={"/"}>Back to home</Link>
            </div>
            
        </div>
    );
};

export default Modal;
