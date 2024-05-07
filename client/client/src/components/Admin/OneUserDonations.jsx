import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const OneUserDonations = () => {

    const [donations, setDonations] = useState([]);

    const { id } = useParams();

    const style = {
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
    }



    useEffect(() => {
        if (id) {
            axios.get("http://localhost:8000/api/user/donation/" + id)
                .then(res => {
                    console.log(res);
                    setDonations(res.data);
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [id]);


    return (
        <div>
            {donations.map((donation) => {
                    return (
                        <div key={donation._id} className="card mb-3" >
                            <div className="card-body">
                                <h5 className="card-title text-center" style={style}>{donation.donationDate}</h5>
                                <div className="d-flex justify-content-evenly">
                                    <div>
                                        <div>
                                            <h6 className="text-muted">Donation Type:</h6>
                                            <p className="text-center">{donation.donationType}</p>
                                        </div>
                                        <div>
                                            <h6 className="card-subtitle mb-2 text-muted">Bleeding Time:</h6>
                                            <p className="text-center">{donation.BleedingTime}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h6 className="text-muted">hemoglobin Level:</h6>
                                            <p className="text-center">{donation.hemoglobinLevel}</p>
                                        </div>
                                        <div>
                                            <h6 className="card-subtitle mb-2 text-muted">Collection Volume:</h6>
                                            <p className="text-center">{donation.collectionVolume}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            )
                            })
            }
        </div>
    )
}

export default OneUserDonations