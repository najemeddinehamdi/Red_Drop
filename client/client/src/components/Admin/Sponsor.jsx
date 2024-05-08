import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import NavbarAdmin from './NavbarAdmin';


const AllUsers=() =>{

    const [sponsors, setSponsor] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:8000/api/sponsor')
            .then(res => {
                console.log(res);
                setSponsor(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const deleteSponsor = (id)=>{
        axios.delete(`http://localhost:8000/api/sponsor/${id}`)
        .then(res=>{
            setSponsor(sponsors.filter(c=>c._id !== id))
        })
        .catch(err=>console.log(err))
    }




    return (
      <div className='container'>
        <div className="row">
          <NavbarAdmin />
          <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Banner</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {sponsors.map(sponsor => (
                        <tr key={sponsor.id}>
                            <td>
                                <Link to={`/admin/sponsor/${sponsor._id}`}>
                                    {sponsor.sponsorName}
                                </Link>
                            </td>
                            <td>{sponsor.banner}</td>
                            <td><button className='btn btn-danger' onClick={()=>deleteSponsor(sponsor._id)}>delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
      </div>
    )
}

export default AllUsers