import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import { toast } from 'react-toastify';

const RoomForm = ({ onRoomCreated }) => {
  const [room, setRoom] = useState({
    name: '',
    numberOfGuests: '',
    description: '',
    roomSize: '',
    bedSize: '',
    roomType: '',
    costPerNight: '',
    facilities: []
  });
  const [facilitiesOptions, setFacilitiesOptions] = useState([]);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await UserService.getRoomFacilities();
        setFacilitiesOptions(response.data);
      } catch (error) {
        console.error('Error fetching facilities: ', error);
      }
    };

    fetchFacilities();
  }, []);

  const handleFacilitiesChange = (e) => {
    const { name, checked } = e.target;
    setRoom((prevRoom) => {
      const facilities = checked
        ? [...prevRoom.facilities, { name, facilityId: e.target.dataset.id }]
        : prevRoom.facilities.filter(facility => facility.name !== name);
      return {
        ...prevRoom,
        facilities
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      await UserService.createRoom(token, room);
      console.log('Room created:', room);
      toast.success('Room created successfully');
      if (onRoomCreated) {
        onRoomCreated();
      }
    } catch (error) {
      console.error('Error creating room:', error);
      toast.error('Failed to create room');
    }
  };

  return (
    <div className="form-container-room max-w-xl mx-auto p-4 space-y-4 bg-white text-dark-grey shadow-md rounded h-full overflow-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">Create Room</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-md font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={room.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
            minLength={2}
            maxLength={100}
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">Number of Guests</label>
          <input
            type="number"
            name="numberOfGuests"
            value={room.numberOfGuests}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
            min={1}
            max={8}
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={room.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
            minLength={10}
            maxLength={500}
          ></textarea>
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">Room Size (sq m)</label>
          <input
            type="number"
            name="roomSize"
            value={room.roomSize}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
            min={0.1}
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">Bed Size</label>
          <input
            type="text"
            name="bedSize"
            value={room.bedSize}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">Room Type</label>
          <select
            name="roomType"
            value={room.roomType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
          >
            <option value="" disabled>Select room type</option>
            <option value="Garden">Garden</option>
            <option value="Park">Park</option>
            <option value="Panoramic">Panoramic</option>
          </select>
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">Cost per Night</label>
          <input
            type="number"
            name="costPerNight"
            value={room.costPerNight}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
            required
            min={10}
            step="1.0"
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">Facilities</label>
          <div className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-2">
            {facilitiesOptions.map((facility) => (
              <div key={facility.facilityId} className="flex items-center">
                <input
                  type="checkbox"
                  id={`facility-${facility.facilityId}`}
                  name={facility.name}
                  data-id={facility.facilityId}
                  checked={room.facilities.some(fac => fac.name === facility.name)}
                  onChange={handleFacilitiesChange}
                  className="mr-2"
                />
                <label htmlFor={`facility-${facility.facilityId}`} className="text-md font-medium text-gray-700">
                  {facility.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-3 border border-transparent text-md font-medium rounded-md shadow-sm text-white bg-custom-purple duration-200 hover:bg-custom-purple-hover hover:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-purple w-full justify-center"
        >
          Create Room
        </button>
      </form>
    </div>
  );
};

export default RoomForm;