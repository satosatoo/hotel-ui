import React from 'react'
import logo from '../assets/images/logo-home.png'
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import UserService from '../services/UserService';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsAuthenticated(UserService.isAuthenticated());
  }, [navigate]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    const confirmDelete = window.confirm('Are you sure you want to logout this user?');
    if (confirmDelete) {
      UserService.logout();
      setIsAuthenticated(false);
    }
  };

  const activeLinkStyle = 'border-y border-white px-4 py-2 text-white';
  const inactiveLinkStyle = 'px-4 py-2';

  return (
      <nav className={`fixed w-full z-10 transition-colors text-5 duration-300 ${isScrolled ? 'bg-dark-grey bg-opacity-90' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center h-24">
          <Link to="/">
            <img src={logo} alt="Hotel" className="max-w-full max-h-full h-full w-3/5 h-auto" />
          </Link>
          <div className="flex space-x-12 font-poppins">
            <Link to={'/'} className={`${location.pathname === '/' ? activeLinkStyle : inactiveLinkStyle}`}>Home</Link>
            <Link to={'/rooms'} className={`${location.pathname === '/rooms' ? activeLinkStyle : inactiveLinkStyle}`}>Rooms</Link>
            <Link to={'/facilities'} className={`${location.pathname === '/facilities' ? activeLinkStyle : inactiveLinkStyle}`}>Facilities</Link>
            <Link to={'/booking'} className={`${location.pathname === '/booking' ? activeLinkStyle : inactiveLinkStyle}`}>Booking</Link>
            {isAuthenticated ? <><Link to={'/profile'} className={`${location.pathname === '/profile' ? activeLinkStyle : inactiveLinkStyle}`}>Profile</Link> <Link to={'/'} onClick={handleLogout} className={inactiveLinkStyle}>Log out</Link></> : <Link to={'/login'} className={`${location.pathname === '/login' ? activeLinkStyle : inactiveLinkStyle}`}>Log in</Link>}
          </div>
        </div>
      </nav>
  )
}

export default Navbar