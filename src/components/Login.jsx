import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
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
            value={password}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 text-dark-grey rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 mt-4 bg-custom-purple text-white font-semibold rounded-md shadow-sm duration-150 hover:bg-custom-purple-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-lg"
        >
          Login
        </button>
        <p className="mt-4 text-center text-lg text-white">
          Don't have an account?{' '}
          <Link to="/register" className="text-custom-purple hover:text-indigo-500">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login