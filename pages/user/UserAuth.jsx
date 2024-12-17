import React, { useState } from 'react'

function UserAuth() {

  const [authChoice, setAuthChoice] = useState('login');

  return (
    <>
      <div className="container p-5 my-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">

            { authChoice === 'login' ?
             ( <h5>New User? Click here to<button className='text-danger border-0 bg-white' onClick={() => setAuthChoice('register')}>Register</button></h5>)
             :
             (
              <h5>Already have an account? Click here to<button className='text-success border-0 bg-white' onClick={() => setAuthChoice('login')}>Login</button></h5>
             )
            }

            {authChoice === 'login' ?
              (<div className='container p-3 d-flex justify-content-center align-items-center flex-column shadow'>
                <input type="email" className='p-1 w-50' placeholder="enter email ID" />
                <input type="password" className='p-1 mt-3 w-50' placeholder="enter password" />
                <button className='btn btn-outline-success px-3 py-1 mt-3 w-50'>Login</button>
                {/* on successful authentication, route to home */}
                {/* login success => to UserHome page */}
              </div>)
              :
              (
                <div className='container p-3 d-flex justify-content-center align-items-center flex-column shadow'>
                  <input type="text" className='p-1 w-50' placeholder="enter name" />
                  <input type="email" className='p-1 mt-3 w-50' placeholder="enter email ID" />
                  <input type="password" className='p-1 mt-3 w-50' placeholder="enter password" />
                  <input type="password" className='p-1 mt-3 w-50' placeholder="enter password again" />
                  <button className='btn btn-outline-danger px-3 py-1 mt-3 w-50'>Register</button>
                  {/* on successful authentication, route to home/login */}
                </div>
              )
            }

          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  )
}

export default UserAuth