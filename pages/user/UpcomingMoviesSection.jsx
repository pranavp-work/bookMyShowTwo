import React from 'react'
import UpcomingMoviesList from './../../components/user/UpcomingMoviesList';

function UpcomingMoviesSection() {
    return (
        <>
            <div className='container'>
                <div className="row w-full">
                    <div className="col-md-3">
                        <h2>Filters</h2>
                        <div className='border-1 border-grey shadow'>
                            <p>Languages</p>
                            <p>Clear</p>
                        </div>
                        <div className='border-1 border-grey shadow'>
                            <p>Genres</p>
                            <p>Clear</p>
                        </div>
                        <div className='border-1 border-grey shadow'>
                            <p>Format</p>
                            <p>Clear</p>
                        </div>
                        <button className='border-danger text-danger w-100 bg-white rounded-2'>Browse by cinemas</button>
                    </div>
                    <div className="col-md-9">
                        <h2>Upcoming Movies</h2>
                        <div>
                            <button className='rounded-5 border-1 border-grey bg-white text-danger ms-1'>English</button>
                            <button className='rounded-5 border-1 border-grey bg-white text-danger ms-1'>Malayalam</button>
                            <button className='rounded-5 border-1 border-grey bg-white text-danger ms-1'>Hindi</button>
                            <button className='rounded-5 border-1 border-grey bg-white text-danger ms-1'>Tamil</button>
                            <button className='rounded-5 border-1 border-grey bg-white text-danger ms-1'>Telugu</button>
                        </div>
                        <UpcomingMoviesList />
                    </div>
                </div>
            </div>
        </>
  )
}

export default UpcomingMoviesSection