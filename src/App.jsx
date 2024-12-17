import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import UserHome from './../pages/user/UserHome';
import UserHeader from './../components/user/UserHeader';
import UserFooter from './../components/user/UserFooter';
import MovieDetails from './../pages/user/MovieDetails';
import SelectTheatre from './../pages/user/SelectTheatre';
import SeatSelection from './../pages/user/SeatSelection';
import CartFunctionality from './../pages/user/CartFunctionality';
import ProfileFunctionality from './../pages/user/ProfileFunctionality';
import { useState } from 'react';
import UpcomingMoviesSection from '../pages/user/UpcomingMoviesSection';
import UserAuth from './../pages/user/UserAuth';
import AdminAuth from './../pages/admin/AdminAuth';
import AdminHome from './../pages/admin/AdminHome';


function App() {

  const [role, setRole] = useState('user');
  const location = useLocation();

  return (
    <>
      <UserHeader />
      <Routes>

        {/* User */}
        <Route path='/' element={< UserHome />}></Route>
        <Route path='/MovieDetails' element={< MovieDetails />}></Route>
        <Route path='/SelectTheatres' element={< SelectTheatre />}></Route>
        <Route path='/SeatSelection' element={< SeatSelection />}></Route>
        <Route path='/CartFunctionality' element={< CartFunctionality />}></Route>
        <Route path='/ProfileFunctionality' element={< ProfileFunctionality />}></Route>
        <Route path='/UpcomingMovies' element={< UpcomingMoviesSection />}></Route>
        <Route path='/UserAuthentication' element={< UserAuth />}></Route>

        {/* Admin */}
        <Route path='/AdminAuthentication' element={< AdminAuth />}></Route>
        <Route path='/AdminDashboard' element={< AdminHome />}></Route>

      </Routes>
      <UserFooter />
    </>
  )
}

export default App
