import { useState, useEffect } from 'react';
import RoomSearch from '../components/RoomSearch';
import RoomList from '../components/RoomList';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  const [availableRooms, setAvailableRooms] = useState([]);
  const [search, setSearch] = useState({
    checkIn: '',
    checkOut: '',
    people: 1
  });
  const [selectedRoom, setSelectedRoom] = useState(null);

  const getAvailableRooms = (search) => {
      const input = search;
      const queryParams = new URLSearchParams({
        checkInDate: input.checkIn,
        checkOutDate: input.checkOut,
        people: input.people
      }).toString();
  
      fetch(`/api/room/available?${queryParams}`).then(res => res.json()).then(data => {
        if (Array.isArray(data)) {
          setAvailableRooms(data);
        } else {
          console.error('Data is not an array:', data);
        }
      }).catch(error => console.error('Error:', error));
  };


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
      const response = await fetch(`/api/reservation/${room.roomId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservation)
      });
      if (response.ok) {
        console.log("Reservation created successfully");
      } else {
        const errorMessage = await response.text();
        throw new Error(`Failed to create reservation: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error:', error);
      console.log("Failed to create reservation");
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