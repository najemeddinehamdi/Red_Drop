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
        <div className='d-flex'>
            <div className="col-6">
                <div className='d-flex gap-5 justify-content-evenly '>
                    <div>
                        <h3>First Name:</h3>
                        <p>{users?.firstName}</p>
                        <h3>Last Name: </h3>
                        <p>{users?.lastName}</p>
                        <h3>Email: </h3>
                        {users?.email}
                        <h3>Phone: </h3>
                        <p>{users?.phone}</p>

                    </div>
                    <div>
                        <h3>nbrDonation: </h3>
                        <p>{users?.nbrDonation}</p>
                        <h3>bloodGroup: </h3>
                        <p>{users?.bloodGroup}</p>
                        <h3>Rewards Points:</h3>
                        <p>{users?.rewardsPoints}</p>
                        <h3>Status: </h3>
                        <p>{users?.status}</p>
                        <h3>Occupation: </h3>
                        <p>{users?.occupation}</p>
                    </div>
                </div>
                <hr />
                <h2>Contact Info</h2>
                <div>
                <h3>Country: </h3>
                        <p>{users?.country}</p>
                        <h3>City:</h3>
                        <p>{users?.city}</p>
                        <h3>State:</h3>
                        <p>{users?.state}</p>
                        <h3>Address:</h3>
                        <p>{users?.address}</p>
                </div>
            </div>
        </div>
            )
}

export default OneUserInfo
