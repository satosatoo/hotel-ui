import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission,
    // for example, sending the data to a server.
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-dark-grey">
      <form onSubmit={handleSubmit} className="bg-dark-grey p-8 rounded-lg shadow-md shadow-indigo-500/30 w-full max-w-md border-t border-indigo-500/30">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Registration</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 text-dark-grey rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 text-dark-grey rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-lg font-medium text-white">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 text-dark-grey rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-lg font-medium text-white">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 text-dark-grey rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block text-lg font-medium text-white">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 text-dark-grey rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 mt-4 bg-custom-purple text-white font-semibold rounded-md shadow-sm duration-150 hover:bg-custom-purple-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-lg"
        >
          Register
        </button>
        <p className="mt-4 text-center text-lg text-white">
          Already have an account?{' '}
          <Link to="/login" className="text-custom-purple hover:text-indigo-500">
            Log in
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register