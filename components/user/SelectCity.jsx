import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function SelectCity() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedCity, setSelectedCity] = useState('Kochi');

    return (
        <>
            <button className='border-0 bg-white p-1' onClick={handleShow}>{selectedCity}</button>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Select your city</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container p-5">
                        <div className="row">
                            <div className="col-md-3 d-flex align-items-center justify-content-center flex-column" onClick={() => setSelectedCity('Mumbai')}>
                                <img src="../../src/assets/images/cities/mumbaiCity.png" alt="" />
                                <h5>Mumbai</h5>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-center flex-column" onClick={() => setSelectedCity('Bangalore')}>
                                <img src="../../src/assets/images/cities/bangaloreCity.png" alt="" />
                                <h5>Bangalore</h5>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-center flex-column" onClick={() => setSelectedCity('Chennai')}>
                                <img src="../../src/assets/images/cities/ChennaiCIty.png" alt="" />
                                <h5>Chennai</h5>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-center flex-column" onClick={() => setSelectedCity('Kochi')}>
                                <img src="../../src/assets/images/cities/kochiCity.jpg" alt="" />
                                <h5>Kochi</h5>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SelectCity