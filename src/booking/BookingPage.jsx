import { useState, useEffect } from 'react';
import RoomSearch from '../room/RoomSearch';
import RoomList from '../room/RoomList';
import BookingForm from '../booking/BookingForm';
import UserService from '../services/UserService';

const BookingPage = () => {
  const [availableRooms, setAvailableRooms] = useState([]);
  const [search, setSearch] = useState({
    checkIn: '',
    checkOut: '',
    people: 1
  });
  const [selectedRoom, setSelectedRoom] = useState(null);

  const getAvailableRooms = async (search) => {
    const token = localStorage.getItem('token');
    try {
      const response = await UserService.getAvailableRooms(token, search);
      if (Array.isArray(response)) {
        setAvailableRooms(response);
      } else {
        console.error('Data is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching available rooms:', error);
    }
  }


  const handleRoomSearch = (search) => {
    setSearch(search);
    setAvailableRooms(getAvailableRooms(search));
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  const handleBackToSearch = () => {
    setSelectedRoom(null);
  };

  const createReservation = async (room, reservation) => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.createReservation(token, room, reservation);
      
      if (response.ok) {
        console.log("Reservation created successfully");
      } else {
        const errorDetails = await response.json();
        throw new Error(`Failed to create reservation: ${JSON.stringify(errorDetails)}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
      console.error('Full error object:', error);
    }
  }

  return (
    <div className="container mx-auto p-4">
      {!selectedRoom ? (
        <>
          <RoomSearch onSearch={handleRoomSearch} />
          <RoomList rooms={availableRooms} onSelect={handleRoomSelect} />
        </>
      ) : (
        <BookingForm room={selectedRoom} search={search} onBack={handleBackToSearch} onSubmit={createReservation}/>
      )}
    </div>
  );
}

export default BookingPage