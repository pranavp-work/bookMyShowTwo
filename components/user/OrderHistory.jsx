import React from 'react'
import { Link } from 'react-router-dom';

function OrderHistory() {
  return (
    <>
    {/* conditional either error or order history */}
      <div className="container-p-5 my-5 d-flex justify-content-center align-items-center flex-column">
        <img src="../../src/assets/images/you-have-no-bookings-history.png" alt=""  />
        <p className='mt-4 text-secondary'>You have no bookings</p>
        <p>How about you get started?</p>
        <Link to={'/'}><button className='py-2 px-3 bg-white border-1 border-danger text-danger rounded-2'>Explore</button></Link>
      </div>

      <div className="container p-5 my-5">
        <div className='row shadow py-3 d-flex align-items-center justify-content-center h-75'>
          <div className="col-md-3">
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/moana-2-et00387901-1732535881.jpg" className='h-75 w-100' alt="" />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4 px-3">
                <h5>Movie Name</h5>
                <p>3D</p>

                <h6>Sat, 26 Oct 2024 | 12:10 PM</h6>
                <p>PVR: Forum Mall, Kochi</p>

                <p>Quantity :2</p>
                <h6>Seat IDs</h6>
                <p><strong>Show TIming|SCREEN 4</strong></p>

              </div>
              <div className="col-md-6"></div>
              <div className="col-md-2">
                <h6>Ticket</h6>
              </div>
            </div>

            {/* <div className="row mt-2 d-flex justify-content-between align-items-center">
              <div className="">
                <p>Ticket Price</p>
                <p>Convenience Fees</p>
              </div>
              <div className="">
                <p>$599.90</p>
                <p>$85.90</p>
              </div>
            </div> */}

            <div className='d-flex justify-content-between mt-3 text-danger px-2 py-1' style={{backgroundColor: 'beige'}}>
              <p>Amount Paid</p>
              <h5 className='me-3'>$600</h5>
            </div>

            
          </div>
        </div>
      </div>


    </>
  )
}

export default OrderHistory