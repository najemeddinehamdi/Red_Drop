import React from 'react'
import NavbarAdmin from './NavbarAdmin'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const OneSponsor = () => {


    const [products, setProducts] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/sponsor/${id}`	)
            .then(res => {
                console.log(res);
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div className='container'>
            <div className="row">
                <NavbarAdmin />
                <Link to={`/admin/sponsor/product/add/${id}`} className='btn btn-primary'>Add Product</Link>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        <Link to={`/admin/product/${product._id}`}>
                                            {product.productName}
                                        </Link>
                                    </td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default OneSponsor