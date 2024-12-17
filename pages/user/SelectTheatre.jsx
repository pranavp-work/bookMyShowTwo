import React from 'react'
import ShowTimings from './../../components/user/ShowTimings';

function SelectTheatre() {
    return (
        <>
            <div className="container p-2">
                <h2>Moana 2 (3D) - English</h2>
                <button className='rounded-5 border-1 border-black text-black ms-1'>Adventure</button>
                <button className='rounded-5 border-1 border-black text-black ms-1'>Animation</button>
                <button className='rounded-5 border-1 border-black text-black ms-1'>Comedy</button>
                <button className='rounded-5 border-1 border-black text-black ms-1'>Fantasy</button>
            </div>
            <hr />
            <div className="container p-2 d-flex justify-content-between">
                <div>
                    <button className='bg-danger text-white border-danger rounded-2 ms-2'>
                        MON <br /> 18 <br /> DEC
                    </button>
                    <button className='bg-light text-danger border-danger rounded-2 ms-2'>
                        MON <br /> 18 <br /> DEC
                    </button>
                    <button className='bg-light text-danger  border-danger rounded-2 ms-2'>
                        MON <br /> 18 <br /> DEC
                    </button>
                </div>

                <div>
                    <button className='border-1 p-2'>English 3D</button>
                    <button className='border-1 p-2'>Filter Price Range</button>
                    <button className='border-1 p-2'>Filter Price Timings</button>
                    <button className='border-1 p-2'>Search Movies</button>
                </div>
            </div>

            <div className='container py-2 px-5 mt-4'>
                < ShowTimings />
            </div>
        </>
    )
}

export default SelectTheatre