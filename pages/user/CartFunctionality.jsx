import React from 'react'

function CartFunctionality() {
    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 shadow">
                        <h6 className='text-danger mt-3'>BOOKING SUMMARY</h6>
                        <div className='d-flex justify-content-between align-items-center flex-row'>
                        <p>Seats (3 Tickets)</p>
                        <p>Rs. 585.00</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center flex-row'>
                        <p className='text-secondary' style={{fontSize: '12px'}}>Convenience Fees</p>
                        <p>Rs. 85.00</p>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center flex-row'>
                        <p>Total</p>
                        <p>Rs. 670.00</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center flex-row px-3 py-2' style={{backgroundColor: '#f6d3bd'}}>
                        <h6 className='text-black'>Amount Payable</h6>
                        <p className='text-black'>Rs. 670.00</p>
                        </div>
                        <p className='mt-5'>By proceeding, I express my consent to complete this transaction.</p>
                        <button className='w-100 bg-danger rounded-2 text-light d-flex justify-content-between align-items-center border-0 p-2 mb-3 shadow'>
                            TOTAL: Rs. 670.00 <span>Proceed</span>
                            {/* payment api or use wallet */}
                        </button>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    )
}

export default CartFunctionality