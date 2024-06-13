import React, { useState, useEffect } from 'react';
import UserService from '../../services/UserService';
import { toast } from 'react-toastify';

const RoomFacilityForm = ({ onRoomFacilityCreated }) => {
  const [roomFacility, setRoomFacility] = useState({
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomFacility((prevRoomFacility) => ({
      ...prevRoomFacility,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      await UserService.createRoomFacility(token, roomFacility);
      console.log('Room created:', roomFacility);
      toast.success('Room facility created successfully');
      if (onRoomFacilityCreated) {
        onRoomFacilityCreated();
      }
    } catch (error) {
      console.error('Error creating room:', error);
      toast.error('Failed to create room facility');
    }
  };

  return (
    <div className="form-container-room max-w-xl mx-auto p-4 space-y-4 bg-white text-dark-grey shadow-md rounded h-full overflow-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">Create Room Facility</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-md font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={roomFacility.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
            minLength={2}
            maxLength={100}
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-3 border border-transparent text-md font-medium rounded-md shadow-sm text-white bg-custom-purple duration-200 hover:bg-custom-purple-hover hover:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-purple w-full justify-center"
        >
          Create Room Facility
        </button>
      </form>
    </div>
  );
};

export default RoomFacilityForm;