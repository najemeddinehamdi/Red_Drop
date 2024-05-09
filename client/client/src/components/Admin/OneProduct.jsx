import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';
import c1 from '../../Images/c1.jpg'
import './OneProduct.css'

const OneProduct = () => {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res);
                setProduct(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                navigate('admin/sponsor/'+product.idSponsor)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='container'>
            <div className="row">
                <NavbarAdmin />
                <div className='d-flex'>
                    <div className='col-6'>
                    <img className='productImg' src= {c1} alt="" />
                    </div>
                    <div className='col-6'>
                        <h1>{product.productName}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        
                        <button className='btn btn-danger' onClick={() => deleteProduct(product._id)}>delete</button>
                        <button className='btn btn-primary' onClick={() => navigate(`/product/edit/${product._id}/${product.idSponsor}`)}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneProduct