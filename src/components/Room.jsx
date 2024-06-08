import React from 'react'
import a1 from '../assets/images/garden-suite/a1.jpg'
import a from '../assets/images/garden-suite/a.jpg'
import b1 from '../assets/images/garden-suite/b1.jpg'

const Room = ({ room, reverse }) => {
  return (
    reverse ? 
  <>
    <div className={`flex flex-col items-center p-4 bg-dark-grey text-white w-full`}>
      <div className={`flex flex-col md:flex-row w-full max-w-full`}>
        {/* Left Section: Text and Layout Image */}
        <div className="flex flex-col items-start space-y-4 text-left flex-1 max-w-md p-4">

          <h1 className="text-3xl font-bold mb-2 ">{room.name}</h1>

          <p className="text-lg pb-6 border-b-2">
            {room.description}
          </p>

          <p className='pt-3'><strong>Area: </strong> {room.roomSize + ' m²'} </p>

          <p><strong>Bed size: </strong> {room.bedSize + ' mm'} </p>

          <p><strong>Price: </strong> {room.costPerNight + '$'} </p>

          <p >
            <strong>Facilities: </strong>
            {room.facilities.map(facility => facility.name).join(', ')}
          </p>

          <div className="flex-grow"></div>
          <div className="relative flex flex-col w-full items-center pt-6 border-t-2">
            <button className="bg-custom-white text-dark-grey text-lg py-2 px-4 rounded w-full duration-150 hover:bg-custom-purple cursor-pointer">BOOK NOW</button>
          </div>
        </div>

        {/* Right Section: Main Image and Buttons */}
        <div className="flex flex-col justify-between items-center flex-1 w-full p-4 relative">
          <img src={a1} alt="Double Room" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  </> 
  : 
  <>
    <div className={`flex flex-col items-center p-4 bg-dark-grey text-white w-full`}>
      <div className={`flex flex-col md:flex-row w-full max-w-full`}>
        {/* Right Section: Main Image and Buttons */}
        <div className="flex flex-col justify-between items-center flex-1 w-full p-4 relative">
          <img src={a1} alt="Double Room" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
        </div>

        {/* Left Section: Text and Layout Image */}
        <div className="flex flex-col items-start space-y-4 text-left flex-1 max-w-md p-4">

          <h1 className="text-3xl font-bold mb-2 ">{room.name}</h1>

          <p className="text-lg pb-6 border-b-2">
            {room.description}
          </p>

          <p className='pt-3'><strong>Area: </strong> {room.roomSize + ' m²'} </p>

          <p><strong>Bed size: </strong> {room.bedSize + ' mm'} </p>

          <p><strong>Price: </strong> {room.costPerNight + '$'} </p>

          <p>
            <strong>Facilities: </strong>
            {room.facilities.map(facility => facility.name).join(', ')}
          </p>

          <div className="flex-grow"></div>
          <div className="relative flex flex-col w-full items-center pt-6 border-t-2">
            <button className="bg-custom-white text-dark-grey text-lg py-2 px-4 rounded w-full duration-100 hover:bg-custom-purple">BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Room