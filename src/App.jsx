import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './general/HomePage';
import RoomsPage from './room/RoomsPage';
import FacilitiesPage from './extras/FacilitiesPage';
import BookingPage from './booking/BookingPage';
import LoginPage from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';
import ProfilePage from './general/ProfilePage';
import RoomDetailsPage from './room/RoomDetailsPage';
import FacilityDetailsPage from './extras/FacilityDetailsPage';
import ManageRooms from './admin/rooms/ManageRooms';
import ManageUsers from './admin/users/ManageUsers';
import ManageBookings from './admin/bookings/ManageBookings';


const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/rooms' element={<RoomsPage />}/>
      <Route path='/facilities' element={<FacilitiesPage />}/>
      <Route path='/booking' element={<BookingPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/profile' element={<ProfilePage />}/>
      <Route path='/room/details' element={<RoomDetailsPage />} />
      <Route path='/facilities/details' element={<FacilityDetailsPage />}/>
      <Route path='/manage/rooms' element={<ManageRooms />}/>
      <Route path='/manage/users' element={<ManageUsers />}/>
      <Route path='/manage/bookings' element={<ManageBookings />}/>
    </Route>
  ));

  return <RouterProvider router={router}/>
}

export default App