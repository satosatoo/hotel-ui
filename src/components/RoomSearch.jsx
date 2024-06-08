import React, { useState } from 'react';

function RoomSearch({ onSearch }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [people, setPeople] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch available rooms based on the filters
    const search = {
      checkIn: checkIn,
      checkOut: checkOut,
      people: people
    };
    onSearch(search);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 pt-32 text-dark-grey">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col">
          <label htmlFor="check-in" className="mb-1 text-white">Check-in Date</label>
          <input
            id="check-in"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="check-out" className="mb-1 text-white">Check-out Date</label>
          <input
            id="check-out"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="people" className="mb-1 text-white">Number of People</label>
          <input
            id="people"
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="border rounded p-2"
            min="1"
          />
        </div>
        <div className="flex items-end">
          <button type="submit" className="bg-white text-dark-grey p-2 mb-1 rounded w-full duration-150 hover:bg-custom-purple hover:text-white cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default RoomSearch;