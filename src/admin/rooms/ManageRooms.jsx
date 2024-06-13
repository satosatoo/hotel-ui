import React, { useEffect, useState } from 'react';
import RoomForm from './RoomForm';
import EditRoomForm from './EditRoomForm';
import UserService from '../../services/UserService';
import { toast } from 'react-toastify';
import RoomFacilityForm from './RoomFacilityForm';
import RoomFacilitiesView from './RoomFacilitiesView';

const ManageRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [showRoomForm, setShowRoomForm] = useState(false);
  const [showEditRoomForm, setShowEditRoomForm] = useState(false);
  const [currentRoomId, setCurrentRoomId] = useState(null);
  const [showRoomFacilityForm, setShowRoomFacilityForm] = useState(false);
  const [showRoomFacilitiesView, setShowRoomFacilitiesView] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const rooms = await UserService.getRooms();
        setRooms(rooms.data);
      } catch (error) {
        console.error("Error: " + error);
      }
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    const fetchRoomFacilities = async () => {
      try {
        const roomFacilities = await UserService.getRoomFacilities();
        setFacilities(roomFacilities.data);
      } catch (error) {
        console.error("Error: " + error);
      }
    };

    fetchRoomFacilities();
  }, []);

  const addRoom = () => {
    setShowRoomForm(true);
  };

  const closeRoomForm = () => {
    setShowRoomForm(false);
  };

  const addRoomFacility = () => {
    setShowRoomFacilityForm(true);
  }

  const closeRoomFacilityForm = () => {
    setShowRoomFacilityForm(false);
  };

  const deleteRoom = async (id) => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      try {
        const token = localStorage.getItem('token');
        await UserService.deleteRoom(token, id);
        setRooms(rooms.filter(room => room.roomId !== id));
        toast.success('Room deleted successfully');
      } catch (error) {
        console.error("Error:", error);
        toast.error('Failed to delete room');
      }
    }
  };

  const editRoom = (id) => {
    setCurrentRoomId(id);
    setShowEditRoomForm(true);
  };

  const closeEditRoomForm = () => {
    setShowEditRoomForm(false);
    setCurrentRoomId(null);
  };

  const viewBookings = (id) => {
    // Implement viewing bookings
  };

  const viewRoomFacilities = () => {
    setShowRoomFacilitiesView(true);
  };

  const closeRoomFacilitiesView = () => {
    setShowRoomFacilitiesView(false);
  };

  const handleRoomCreated = () => {
    setShowRoomForm(false);
    fetchRooms();
  };

  const handleRoomUpdated = () => {
    setShowEditRoomForm(false);
    setCurrentRoomId(null);
    fetchRooms();
  };

  const handleRoomFacilityCreated = () => {
    setShowRoomFacilityForm(false);
  };

  const fetchRooms = async () => {
    try {
      const rooms = await UserService.getRooms();
      setRooms(rooms.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 pt-32">
      <div className="flex justify-between mb-4 space-x-2">
        <button onClick={addRoom} className="button-purple">
          Add Room
        </button>
        <button onClick={addRoomFacility} className="button-dusty">
          Add Room Facility
        </button>
        <button onClick={viewRoomFacilities} className="button-purple">
          View Room Facilities
        </button>
      </div>
      <div className="space-y-4">
        {rooms.map((room, index) => (
          <div key={index} className="bg-dark-grey rounded-lg p-3 flex justify-between items-center border-2 border-gray-500">
            <div className="flex space-x-4 text-lg">
              <p>Type: {room.roomType}</p>
              <p>Price: {room.costPerNight}</p>
              <p>Capacity: {room.numberOfGuests}</p>
              <p>Room size: {room.roomSize}</p>
              <p>Bed size: {room.bedSize}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => editRoom(room.roomId)} className="button-purple max-h-20">
                Edit
              </button>
              <button onClick={() => deleteRoom(room.roomId)} className="button-dusty max-h-20">
                Delete
              </button>
              <button onClick={() => viewBookings(room.roomId)} className="button-purple max-h-20">
                View Bookings
              </button>
            </div>
          </div>
        ))}
      </div>

      {showRoomForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded p-6 shadow-lg max-w-2xl w-full relative">
            <button
              onClick={closeRoomForm}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              &times;
            </button>
            <RoomForm onRoomCreated={handleRoomCreated} />
          </div>
        </div>
      )}

      {showEditRoomForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded p-6 shadow-lg max-w-2xl w-full relative">
            <button
              onClick={closeEditRoomForm}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              &times;
            </button>
            <EditRoomForm roomId={currentRoomId} onRoomUpdated={handleRoomUpdated} />
          </div>
        </div>
      )}

      {showRoomFacilityForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded p-6 shadow-lg max-w-2xl w-full relative">
            <button
              onClick={closeRoomFacilityForm}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              &times;
            </button>
            <RoomFacilityForm onRoomCreated={handleRoomFacilityCreated} />
          </div>
        </div>
      )}

      {showRoomFacilitiesView && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded p-6 shadow-lg max-w-2xl w-full relative">
            <button
              onClick={closeRoomFacilitiesView}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              &times;
            </button>
            <RoomFacilitiesView facilities={facilities} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageRooms;