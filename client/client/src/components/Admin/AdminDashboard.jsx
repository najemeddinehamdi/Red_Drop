import React from 'react'
import NavbarAdmin from '../Admin/NavbarAdmin'
import AllUsers from '../Admin/AllUsers'

const AdminDashboard = () => {
  return (
    <div className='container'>
        <div className="row">
            <NavbarAdmin />
            <AllUsers />
        </div>
    </div>
  )
}

export default AdminDashboard