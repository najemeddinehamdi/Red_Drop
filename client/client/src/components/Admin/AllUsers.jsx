import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AllUsers() {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/allUser')
            .then(res => {
                console.log(res);
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const deleteUser = (id)=>{
        axios.delete(`http://localhost:8000/api/countries/delete/${id}`)
        .then(res=>{
            setUsers(users.filter(c=>c._id !== id))
        })
        .catch(err=>console.log(err))
    }




    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Blood Group</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>
                                <Link to={`/admin/user/${user._id}`}>
                                    {user.firstName}
                                </Link>
                            </td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.bloodGroup}</td>
                            <td><button className='btn btn-danger' onClick={()=>deleteUser(user._id)}>delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllUsers