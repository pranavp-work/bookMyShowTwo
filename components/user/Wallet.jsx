import React from 'react'

function Wallet() {
  return (
    <>
      <div className="container p-5 mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h3>Wallet</h3>
            <hr />
            <div className='d-flex justify-content-between align-items-center flex-row'>
              <p>Current Balance : $599.90</p>
              <button>Add Money</button>
            </div>

          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  )
}

export default Wallet