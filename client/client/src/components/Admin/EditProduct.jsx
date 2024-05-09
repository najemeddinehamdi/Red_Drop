import React from 'react'
import NavbarAdmin from './NavbarAdmin'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


const EditProduct = () => {

    const { id } = useParams()
    const {sponsorId} = useParams()


    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [idSponsor, setIdSponsor] = useState('')



    const [errors, setErrors] = useState([])


    const navigate = useNavigate();

    const SubmitHandler = (e) => {
        e.preventDefault()
        axios.patch('http://localhost:8000/api/product/' + id, { productName, description, price, image})
            .then(res => {
                console.log(res);
                navigate('/admin/sponsor/' + idSponsor);
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





    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProductName(res.data.productName)
                setDescription(res.data.description)
                setPrice(res.data.price)
                setImage(res.data.image)
                setIdSponsor(res.data.idSponsor)
                console.log(idSponsor)
            })


    }, [id])









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
                    <input type="text" className='form-control' value={productName} onChange={(e) => setProductName(e.target.value)} />
                    <label className='label-control'>Description</label>
                    <input type="text" className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <label className='label-control'>Price</label>
                    <input type="text" className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} />
                    <label className='label-control'>Image</label>
                    <input type="text" className='form-control' value={image} onChange={(e) => setImage(e.target.value)} />
                    <button className='btn btn-success '> Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditProduct