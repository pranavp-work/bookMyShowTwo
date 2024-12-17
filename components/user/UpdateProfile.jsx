import React from 'react'

function UpdateProfile() {
  return (
    <>
      <div className="container p-5 mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="p-5 w-full d-flex justify-content-start align-items-center" style={{ backgroundImage: 'linear-gradient(90deg, rgba(165,163,186,1) 0%, rgba(255,226,226,1) 35%)' }}>
              <label htmlFor="updateProfilePic">
                <input type="file" id="updateProfilePic" className="d-none" />
                <img src="https://www.svgrepo.com/show/497407/profile-circle.svg" width="70px" height="70px" alt="" />
              </label>
              <h3 className="ms-5">Hi, User</h3>
            </div>

            <div className="px-3 py-5 shadow mt-3">
              <h5 className='mb-5'>Account Details</h5>
              <div className="d-flex justify-content-between align-items-center flex-row mt-3">
                <p>Email Address</p>
                <p>guest@gmail.com</p>
                <button className='text-danger border-0 bg-white'>Edit</button>
              </div>
              <div className="d-flex justify-content-between align-items-center flex-row mt-3">
                <p>Mobile Numbers</p>
                <p>9847901234</p>
                <button className='text-danger border-0 bg-white'>Edit</button>
              </div>
              <div className="d-flex justify-content-between align-items-center flex-row mt-3">
                <p>First Name</p>
                <p>Guest</p>
                <button className='text-danger border-0 bg-white'>Edit</button>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  )
}

export default UpdateProfile