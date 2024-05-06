import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';

const Quiz = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [healthConditions, setHealthConditions] = useState(false);
    const [recentSurgery, setRecentSurgery] = useState(false);
    const [medication, setMedication] = useState(false);
    const [travelHistory, setTravelHistory] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (age && weight && !healthConditions && !recentSurgery && !medication && !travelHistory) {
            console.log("You are eligible to donate blood!");

        } else {
            setShowModal(true);
        }
    };


    return (
        <div className="quiz-container">
            <Link to={"/"} className='btn'>Back</Link>
            <h2>Blood Donation Eligibility Quiz</h2>
            <form onSubmit={handleSubmit}>
                <div className="question">
                    <label htmlFor="age">Are you over 18 years old?</label>
                    <input type="checkbox" className="cyberpunk-checkbox" checked={age} onChange={(e) => setAge(e.target.checked)} />
                </div>
                <div className="question">
                    <label htmlFor="weight">Do you weigh at least 50 kg?</label>
                    <input type="checkbox" className="cyberpunk-checkbox" checked={weight} onChange={(e) => setWeight(e.target.checked)} />
                </div>
                <div className="question">
                    <label htmlFor="healthConditions">Do you have any chronic health conditions?</label>
                    <input type="checkbox" className="cyberpunk-checkbox" checked={healthConditions} onChange={(e) => setHealthConditions(e.target.checked)} />
                </div>
                <div className="question">
                    <label htmlFor="recentSurgery">Have you had any surgery in the past 6 months?</label>
                    <input type="checkbox" className="cyberpunk-checkbox" checked={recentSurgery} onChange={(e) => setRecentSurgery(e.target.checked)} />
                </div>
                <div className="question">
                    <label htmlFor="medication">Are you currently taking any medication?</label>
                    <input type="checkbox" className="cyberpunk-checkbox" checked={medication} onChange={(e) => setMedication(e.target.checked)} />
                </div>
                <div className="question">
                    <label htmlFor="travelHistory">Have you traveled to any malaria-risk areas recently?</label>
                    <input type="checkbox" className="cyberpunk-checkbox" checked={travelHistory} onChange={(e) => setTravelHistory(e.target.checked)} />
                </div>
                <button className='quiz' type="submit">Submit</button>
            </form>
            {showModal && <Modal setShowModal={setShowModal} />}
        </div>
    );
};

export default Quiz;
