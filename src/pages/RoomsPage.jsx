import React, { useEffect, useState } from 'react'
import Room from '../components/Room';

const RoomsPage = () => {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const apiUrl = '/api/room';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setRooms(data);
        console.log(data);
      } catch (error) {
        console.log("Error: " + error);
      }
    }

    fetchRooms();
  }, []);

  return (
    <>

    <div className="container mx-auto p-4">
        <div className="flex flex-wrap gap-36 mt-48">
          <h1 className="text-3xl font-bold text-custom-white mx-auto">Guest Rooms and Suites</h1>
          {rooms.map((room, index) => (
            <Room key={index} room={room} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </>
  )
}

export default RoomsPage