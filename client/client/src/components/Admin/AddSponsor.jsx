import React from 'react'
import NavbarAdmin from './NavbarAdmin'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddSponsor = () => {

    const [sponsorName, setSponsorName] = useState("")
    const [banner, setBanner] = useState("")
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const SubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/sponsor/new', { sponsorName, banner })
            .then(res => {
                console.log(res);
                navigate('/admin/sponsor');
            })
            .catch(err => {
                const errorRes = err.response.data.errors;
                const errArray = []
                for (const key of Object.keys(errorRes)) {
                    errArray.push(errorRes[key].message)
                }
                setErrors(errArray)
            });
    }




    return (
        <div className='container'>
            <div>
                <NavbarAdmin />
            </div>
            <div>
                <form onSubmit={SubmitHandler} >
                    {errors.map((err, i) => (
                        <p key={i} className='text-danger'>{err}</p>
                    ))}
                    <label className='label-control'>Name</label>
                    <input type="text" className='form-control' value={sponsorName} onChange={(e) => setSponsorName(e.target.value)} />
                    <button className='btn btn-success '> Create</button>
                </form>
            </div>
        </div>
    )
}

export default AddSponsor