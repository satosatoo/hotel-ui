import React from 'react';
import { useLocation } from 'react-router-dom';
import a1 from '../assets/images/garden-suite/a1.jpg';
import a2 from '../assets/images/garden-suite/a2.jpg';
import a3 from '../assets/images/garden-suite/a3.jpg';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const RoomDetailsPage = () => {
  const location = useLocation();
  const room = location.state?.room;

  if (!room) {
    return <div>No room information available.</div>;
  }

  const images = [
    a1, a2, a3
  ];

  return (
    <div className="bg-dark-grey text-white min-h-screen p-6 pt-28">
        <Slide>
            <div className="each-slide-effect-room">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect-room">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect-room">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        </Slide>
      
      <div className="mt-12 mb-16 mx-auto max-w-2xl">
        <p className="text-2xl font-semibold mb-8 text-center">{room.name}</p>
        <p className="text-xl">{room.description}</p>
        
        <div className="flex flex-wrap items-center mb-8 mt-8">
          <div className="w-full sm:w-1/2 md:w-1/3 text-lg">
            <p><strong>Bed size: </strong> {room.bedSize + ' mm'} </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 text-lg">
            <p><strong>Area: </strong> {room.roomSize + ' m²'} </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 text-lg">
            <p><strong>Price: </strong> {room.costPerNight + '$'} </p>
          </div>
        </div>
        
        <div className="mb-4">
          <strong className="text-lg text-white">Facilities:</strong>
          <ul className="list-disc ml-6 text-white text-lg">
            {room.facilities.map((facility, index) => (
              <li key={index}>{facility.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;