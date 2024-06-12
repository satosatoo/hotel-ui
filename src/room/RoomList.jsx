import React from 'react';
import a1 from '../assets/images/garden-suite/a1.jpg';

function RoomList({ rooms = [], onSelect }) {
  if (!Array.isArray(rooms)) {
    return <div>No rooms available</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
      {rooms.map((room, index) => (
        <div key={index} className="border rounded-lg flex">
          <div className="flex-grow p-4">
            <h3 className="text-lg font-bold mb-2">{room.name}</h3>
            <p><strong>Area: </strong> {room.roomSize + ' m²'} </p>
            <p><strong>Bed size: </strong> {room.bedSize + ' mm'} </p>
            <p><strong>Price: </strong> {room.costPerNight + '$'} </p>
            <p >
              <strong>Facilities: </strong>
              {room.facilities.map(facility => facility.name).join(', ')}
            </p>
            <button onClick={() => onSelect(room)} className="bg-white text-dark-grey p-2 mt-4 rounded w-full duration-150 hover:bg-custom-purple hover:text-white cursor-pointer">
              Select
            </button>
          </div>
          <div className="w-full ml-4">
            <img src={a1} alt={room.name} className="w-full h-full object-cover rounded-r-lg"/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoomList;