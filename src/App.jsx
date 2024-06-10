import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout';
import RoomsPage from './pages/RoomsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

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
    </Route>
  ));

  return <RouterProvider router={router}/>
}

export default App