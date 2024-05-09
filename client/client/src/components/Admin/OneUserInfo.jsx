import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



const OneUserInfo = () => {

    const [users, setUsers] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get("http://localhost:8000/api/signup/" + id)
                .then(res => {
                    console.log(res);
                    setUsers(res.data);
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [id]);





    return (
        <div className='container'>
            <div>
                <div className='container d-flex gap-5  '>
                    <div>
                        <h3>First Name:</h3>
                        <p>{users?.firstName}</p>
                        <h3>Last Name: </h3>
                        <p>{users?.lastName}</p>
                        <h3>Email: </h3>
                        <p>{users?.email}</p>
                        <h3>Phone: </h3>
                        <p>{users?.phoneNumber}</p>
                        <h3>Occupation: </h3>
                        <p>{users?.Occupation}</p>
                    </div>
                    <div>
                        <h3>nbrDonation: </h3>
                        <p>{users?.nbrDonation}</p>
                        <h3>bloodGroup: </h3>
                        <p>{users?.bloodGroup}</p>
                        <h3>Rewards Points:</h3>
                        <p>{users?.rewardsPoints}</p>
                        <h3>Status: </h3>
                        <p>{users?.Status}</p>
                    </div>
                </div>
                <h2 className='ContactInfo'>Contact Info</h2>
                <div className='d-flex gap-5'>
                    <div className='container '>
                        <h3>Country: </h3>
                        <p>{users?.contactInfo.country}</p>
                        <h3>City:</h3>
                        <p>{users?.contactInfo.city}</p>
                    </div>
                    <div className='container '>
                        <h3>department:</h3>
                        <p>{users?.contactInfo.department}</p>
                        <h3>Address:</h3>
                        <p>{users?.contactInfo.address}</p>
                    </div>
                </div>
            </div>
        </div>
            )
}

export default OneUserInfo
