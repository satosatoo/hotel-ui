import React from 'react'
import logo from '../assets/images/logo-home.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-10 transition-colors text-5 duration-300 ${isScrolled ? 'bg-dark-grey bg-opacity-90' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center h-24">
          <img src={logo} alt="Hotel" className="max-w-full max-h-full h-full" />
          <div className="flex space-x-12 font-poppins">
            <Link to={'/'}>Home</Link>
            <Link to={'/rooms'}>Rooms</Link>
            <Link to={'/facilities'}>Facilities</Link>
            <Link to={'/booking'}>Booking</Link>
            <Link to={'/login'}>Log in</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar