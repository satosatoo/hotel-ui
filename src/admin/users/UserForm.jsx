import React, { useState } from 'react';
import UserService from '../../services/UserService';
import { toast } from 'react-toastify';

const UserForm = ({ onUserCreated }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      await UserService.createAdmin(token, user);
      console.log('Admin created:', user);
      toast.success('Admin created successfully');
      if (onUserCreated) {
        onUserCreated();
      }
    } catch (error) {
      console.error('Error creating admin:', error);
      toast.error('Failed to create admin');
    }
  };

  return (
    <div className="form-container-user max-w-xl mx-auto p-4 space-y-4 bg-white text-dark-grey shadow-md rounded h-full overflow-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">Create Admin</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-md font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
            minLength={2}
            maxLength={100}
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
            minLength={6}
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">First name</label>
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">Last name</label>
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">Phone number</label>
          <input
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-3 border border-transparent text-md font-medium rounded-md shadow-sm text-white bg-custom-purple duration-200 hover:bg-custom-purple-hover hover:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-purple w-full justify-center"
        >
          Create Admin
        </button>
      </form>
    </div>
  );
};

export default UserForm;