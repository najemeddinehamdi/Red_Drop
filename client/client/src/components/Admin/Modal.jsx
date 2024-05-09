import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../Admin/Modal.css";

const Modal = ({ onClose }) => {
  const [donationDate, setDonationDate] = useState('');
  const [BleedingTime, setBleedingTime] = useState('');
  const [collectionVolume, setCollectionVolume] = useState('');
  const [hemoglobinLevel, setHemoglobinLevel] = useState('');
  const [donationType, setDonationType] = useState('Whole Blood');
  const [errors, setErrors] = useState([]);
  const { id } = useParams();

  const SubmitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/donation/new', {
      donationDate,
      BleedingTime,
      collectionVolume,
      hemoglobinLevel,
      donationType,
      idUser: id
    })
    .then(res => {
      console.log("Response 👍", res);
      // setDonationDate('')
      // setBleedingTime('')
      // setCollectionVolume('')
      // setHemoglobinLevel('')
      // setDonationType('')
      onClose(); 
    })
    .catch(err => {
      console.log("Error 🚨", err.response?.data || err.message || 'Unknown error');
      const error = err.response?.data?.error;
      const errArray = [];
      if (error) {
        for (const key in error) {
          errArray.push(error[key].message)
        }
        setErrors(errArray)
      } else {
        // Handle other types of errors
      }
    })
  }

  return (
    <div className='modal-container'>
      <div>
        <h2>Add Donation</h2>
        <form onSubmit={SubmitHandler} >
          {errors.map((err, i) => (
            <p key={i} className='text-danger'>{err}</p>
          ))}
          <label className='label-control'>Date</label>
          <input type="date" className='form-control' value={donationDate} onChange={(e) => setDonationDate(e.target.value)} />
          <label className='label-control'>Bleeding Time</label>
          <input type="number" className='form-control' value={BleedingTime} onChange={(e) => setBleedingTime(e.target.value)} />
          <label className='label-control'>Collection Volume</label>
          <input type="number" className='form-control' value={collectionVolume} onChange={(e) => setCollectionVolume(e.target.value)} />
          <label className='label-control'>Hemoglobin Level</label>
          <input type="number" className='form-control' value={hemoglobinLevel} onChange={(e) => setHemoglobinLevel(e.target.value)} />
          <label className='label-control'>Donation Type</label>
          <select className='form-control' value={donationType} onChange={(e) => setDonationType(e.target.value)} required>
            <option value="">Select Type</option>
            <option value="Whole Blood">Whole Blood</option>
            {/* Add more options as needed */}
          </select>
          <button className='btn btn-primary' >Add</button>
        </form>
      </div>
    </div>
  )
}

export default Modal;
