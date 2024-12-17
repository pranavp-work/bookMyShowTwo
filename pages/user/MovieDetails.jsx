import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function MovieDetails() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* <div className='mb-5'>
                <div className='w-100' style={{ height: '250px' }}>
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/moana-2-et00387901-1732535881.jpg" className='w-100' style={{ objectFit: 'cover' }} alt="" />

                </div>
            </div> */}
            <div className="px-5" style={{backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(225,211,255,1) 14%, rgba(225,211,255,1) 85%, rgba(0,0,0,1) 100%)'}}>
                <div className="container d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
                    {/* <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/moana-2-et00387901-1732535881.jpg" className='w-100 h-100' alt="" style={{ objectFit: 'fill', height: '250px' }} /> */}
                    <div className="row" style={{ height: '250px' }}>
                        <div className="col-md-3 col-sm-6">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/moana-2-et00387901-1732535881.jpg" className='w-100 h-75 img-fluid' />
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <h2>Moana 2</h2>
                            <p>2D
                                ,
                                IMAX 3D
                                ,
                                3D SCREEN X
                                ,
                                MX4D 3D
                                ,
                                4DX 3D
                                ,
                                ICE 3D
                                ,
                                3D
                                English
                                ,
                                Hindi</p>
                            <p>1h 40m •
                                Adventure
                                ,
                                Animation
                                ,
                                Comedy
                                ,
                                Fantasy
                                • U • 29 Nov, 2024
                            </p>
                            <button className='p-2 bg-danger border-danger text-light w-50' onClick={handleShow}>Book Tickets</button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Moana 2</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Link to={'/SelectTheatres'}><Button variant="secondary">
                                        3D
                                    </Button></Link>
                                </Modal.Body>
                            </Modal>
                        </div>
                        <div className="col-md-3 col-sm-6"></div>
                        <div className="col-md-2 col-sm-6">
                            <button className='bg-dark text-light p-2 w-50'>Share</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <h2>About the movie</h2>
                <p>After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she`s ever faced. </p>

                <h2>Top offers for you</h2>
                <div>
                    <button>discount coupon</button>
                </div>
                <hr />

                <h3>Cast</h3>
                <hr />

                <h3>Crew</h3>
                <hr />

                <h3>Reviews</h3>
                <hr />

                <h3>You might also like</h3>
            </div>

        </>
    )
}

export default MovieDetails