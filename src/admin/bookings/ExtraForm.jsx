import React, { useState } from 'react';
import UserService from '../../services/UserService';
import { toast } from 'react-toastify';

const ExtraForm = ({ onExtraCreated }) => {
  const [extra, setExtra] = useState({
    name: '',
    description: '',
    location: '',
    hours: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExtra((prevExtra) => ({
      ...prevExtra,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      await UserService.createExtra(token, extra);
      toast.success('Extra created successfully');
      if (onExtraCreated) {
        onExtraCreated();
      }
    } catch (error) {
      console.error('Error creating extra:', error);
      toast.error('Failed to create extra');
    }
  };

  return (
    <div className="form-container-extra max-w-xl mx-auto p-4 space-y-4 bg-white text-dark-grey shadow-md rounded h-full overflow-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">Create Extra</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-md font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={extra.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
            minLength={2}
            maxLength={100}
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={extra.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
            minLength={10}
            maxLength={500}
          ></textarea>
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={extra.location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">Hours</label>
          <input
            type="text"
            name="hours"
            value={extra.hours}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-3 border border-transparent text-md font-medium rounded-md shadow-sm text-white bg-custom-purple duration-200 hover:bg-custom-purple-hover hover:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-purple w-full justify-center"
        >
          Create Extra
        </button>
      </form>
    </div>
  );
};

export default ExtraForm;