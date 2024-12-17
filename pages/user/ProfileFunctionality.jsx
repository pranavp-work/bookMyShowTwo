import React, { useState } from 'react'
import OrderHistory from './../../components/user/OrderHistory';
import Wallet from './../../components/user/Wallet';
import UpdateProfile from './../../components/user/UpdateProfile';

function ProfileFunctionality() {
    const [selectSection, setSelectSection] = useState(1);
    console.log(selectSection);

    return (
        <>
            <div className="container bg-light px-5 py-2 d-flex justify-content-around align-items-center flex-row">
                <button className='border-0 btn btn-light' onClick={() => setSelectSection(1)}>Your Orders</button>
                <button className='border-0 btn btn-light' onClick={() => setSelectSection(2)}>Wallet</button>
                <button className='border-0 btn btn-light' onClick={() => setSelectSection(3)}>Profile</button>
            </div>

            <div className="mt-5 px-5 container">
                {
                    selectSection === 1 && <OrderHistory />
                }
                {
                    selectSection === 2 && <Wallet />
                }
                {
                    selectSection === 3 && <UpdateProfile />
                }
            </div>
        </>
    )
}

export default ProfileFunctionality