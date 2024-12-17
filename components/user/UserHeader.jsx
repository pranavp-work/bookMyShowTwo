import React from 'react'
import { Link } from 'react-router-dom';
import SelectCity from './SelectCity';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UserHeader() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      {/* <nav className='d-flex justify-content-between align-items-center p-3' style={{position: 'fixed'}}>
        <div className='d-flex align-items-center'>
          <h2>BookMoviesNow</h2>
          <input type="text" placeholder='Search For Movies' className='p-1 border border-grey rounded' style={{width: '300px'}} />
        </div>
        <div className='d-flex align-items-center'>
          <div className='ms-4'>
            <p className='text-warning border border-warning p-1'>$500</p>
          </div>
          <div className='ms-4'>
            <button className='border-0 p-1 w-100'>Kochi</button>
          </div>
          <div className='ms-4'>
            <h3>Hi, User</h3>
          </div>
        </div>
      </nav> */}

      <nav className='p-3 container'>
        <div className="row">
          <div className="col-md-2">
            <Link to={'/'} style={{ textDecorationLine: 'none' }}><h4 className='text-danger'>BookMoviesNow</h4></Link>
          </div>
          <div className="col-md-4">
            <input type="text" placeholder='Search For Movies' className='w-100 border-grey border-1 rounded' />
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-1">
          <Link to={'/ProfileFunctionality'} style={{textDecorationLine: 'none'}}><p className='border border-danger rounded-3 px-2 text-danger py-1'>$500</p></Link>
          </div>
          <div className="col-md-1">
            < SelectCity />
          </div>
          <div className="col-md-1 d-flex flex-row">
            <img src="../../src/assets/images/profilePictureEmpty.jpg" alt="" width="25px" height="25px" />
            <button className='border-0 bg-white' onClick={handleShow}>Hi, Guest</button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Hi, User</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="d-flex justify-content-end">
                <Link to={'/ProfileFunctionality'}><button className="btn btn-outline-primary" onClick={handleClose}>
                  Go to profile
                </button></Link>
                <Link to={'/UserAuthentication'}><Button variant="danger" onClick={handleClose} className="ms-3">
                  Logout
                  {/* on logout, route to userAuth */}
                </Button></Link>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </nav>
    </>
  )
}

export default UserHeader