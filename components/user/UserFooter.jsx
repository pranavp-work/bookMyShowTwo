import React from 'react'

function UserFooter() {
  return (
    <>
<div className="container-fluid bg-dark text-light p-4">
  <div className="row">
    <div className="col-md-4 p-2 me-auto">
      <h4 className='mb-3'>BookMyShow</h4>
      <p style={{textAlign:"justify"}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae exercitationem maxime omnis magnam, hic, suscipit amet sunt officiis, ipsa sint obcaecati distinctio velit aspernatur corporis laborum reprehenderit quasi veritatis tempora.
      </p>
    </div>
    <div className="col-md-8 text-center">
      <button className='btn btn-danger'>Contact Today !</button>
      <div className="row mt-4">
        <div className="col-md-4">
        {/* <FontAwesomeIcon icon={faHeadset} className='fa-2x'/> */}
        <p>        24/7 CUSTOMER CARE
        </p>
        </div>
        <div className="col-md-4">
        {/* <FontAwesomeIcon icon={faTicket} className='fa-2x'/> */}
        <p className='fs-6'>RESEND BOOKING CONFIRMATION</p>
        </div>
        <div className="col-md-4">
        {/* <FontAwesomeIcon icon={faEnvelope} className='fa-2x' /> */}
        <p>SUBCRIBE TO THE NEWSLETTER</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default UserFooter