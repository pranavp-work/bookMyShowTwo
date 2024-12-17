import React from 'react'

function AdminHome() {
  return (
    <>
     <div className="px-5 py-2 d-flex justify-content-between align-items-center bg-success text-white">
      <h3>Admin Dashboard</h3>
      <button className="btn btn-danger">Logout</button>
     </div>

     <div>
      <div className="row">
        <div className="col-md-3 d-flex flex-column">
          <button>Manage Shows</button>
          <button>Manage Shows</button>
          <button>Manage Shows</button>
        </div>
        <div className="col-md-9">
          
        </div>
      </div>
     </div>
    </>
  )
}

export default AdminHome