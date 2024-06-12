import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from "../services/UserService";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const data = await UserService.login(formData);
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        window.location.href = '/';
      }else {
        setErrors(data.message);
      }
      console.log('Form data submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
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
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 text-dark-grey rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            required
          />
          {errors.email && <p className="text-red-500 mt-1 text-md">{errors.email}</p>}
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
          {errors.password && <p className="text-red-500 mt-1 text-md">{errors.password}</p>}
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

export default LoginPage