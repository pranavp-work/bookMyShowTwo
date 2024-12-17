import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function ShowTimings() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <hr />
            <div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 d-flex flex-row">
                        <p className='ms-2'>▢ Available</p>
                        <p className='ms-2'>▣ Fast Filling</p>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <div className='d-flex justify-content-between flex-row'>
                            <button>❤️</button>
                            <h6>
                                PVR: Oberon Mall, Kochi</h6>

                            <button>info</button>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <button className='px-3 py-2 text-success border-dark border-1 rounded-1 ms-4' onClick={handleShow}>7:10 PM</button>
                        <button className='px-3 py-2 text-success border-dark border-1 rounded-1 ms-4' onClick={handleShow}>9:30 PM</button>
                        <button className='px-3 py-2 text-success border-dark border-1 rounded-1 ms-4' onClick={handleShow}>11:45 PM</button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>How many seats?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='d-flex flex-row justify-content-between'>
                                    <button className='rounded-5 btn btn-outline-danger'>1</button>
                                    <button className='rounded-5 btn btn-outline-danger'>2</button>
                                    <button className='rounded-5 btn btn-outline-danger'>3</button>
                                    <button className='rounded-5 btn btn-outline-danger'>4</button>
                                    <button className='rounded-5 btn btn-outline-danger'>5</button>
                                    <button className='rounded-5 btn btn-outline-danger'>6</button>
                                    <button className='rounded-5 btn btn-outline-danger'>7</button>
                                    <button className='rounded-5 btn btn-outline-danger'>8</button>
                                    <button className='rounded-5 btn btn-outline-danger'>9</button>
                                    <button className='rounded-5 btn btn-outline-danger'>10</button>
                                </div>
                                <hr />
                                <div>
                                    <div className="row">
                                        <div className="col-md-3"></div>
                                        <div className="col-md-3 d-flex justify-content-center align-items-center flex-column">
                                        <p style={{fontSize: '10px'}}>CLASSIC PLUS </p>
                                        <p style={{fontSize: '10px'}}><strong>Rs. 195</strong></p>
                                        <p className='text-success' style={{fontSize: '10px'}} > Available</p>
                                        </div>
                                        <div className="col-md-3 d-flex justify-content-center align-items-center flex-column p-2">
                                        <p style={{fontSize: '10px'}}>CLASSIC PLUS </p>
                                        <p style={{fontSize: '10px'}}><strong>Rs. 195</strong></p>
                                        <p className='text-success' style={{fontSize: '10px'}} > Available</p>
                                        </div>
                                        <div className="col-md-3"></div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer className='d-flex align-items-center justify-content-center'>
                                <Link to={'/SeatSelection'} className='w-100'><Button variant="secondary" className= "w-100 btn-danger btn" onClick={handleClose}>
                                    Select Seats
                                </Button></Link>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowTimings