import React from 'react'

function AdminAuth() {
  return (
    <>
      <div className="container p-5 my-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">

            <h5>Admin Login</h5>

            <div className='container p-3 d-flex justify-content-center align-items-center flex-column shadow'>
              <input type="text" className='p-1 w-50' placeholder="enter admin ID" />
              <input type="password" className='p-1 mt-3 w-50' placeholder="enter password" />
              <button className='btn btn-outline-success px-3 py-1 mt-3 w-50'>Login</button>
              {/* on successful authentication, route to Admin Dashboard */}
            </div>

          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  )
}

export default AdminAuth