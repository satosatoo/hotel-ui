import React, { useEffect, useState } from 'react';
// import EditBookingForm from './EditBookingForm';
import UserService from '../../services/UserService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ExtraForm from './ExtraForm';
import ExtrasView from './ExtrasView';

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [extras, setExtras] = useState([]);
  // const [showEditBookingForm, setShowEditBookingForm] = useState(false);
  const [currentBookingId, setCurrentBookingId] = useState(null);
  const [showExtraForm, setShowExtraForm] = useState(false);
  const [showExtrasView, setShowExtrasView] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        const bookings = await UserService.getBookings(token);
        setBookings(bookings);
      } catch (error) {
        console.error("Error: " + error);
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    const fetchExtras = async () => {
      try {
        const extras = await UserService.getExtras();
        setExtras(extras.data);
      } catch (error) {
        console.error("Error: " + error);
      }
    };

    fetchExtras();
  }, []);

  const addExtra = () => {
    setShowExtraForm(true);
  }

  const closeExtraForm = () => {
    setShowExtraForm(false);
  };

  const deleteBooking = async (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        const token = localStorage.getItem('token');
        await UserService.deleteBooking(token, id);
        setBookings(bookings.filter(booking => booking.bookingId !== id));
        toast.success('Booking deleted successfully');
      } catch (error) {
        console.error("Error:", error);
        toast.error('Failed to delete booking');
      }
    }
  };

  // const editBooking = (id) => {
  //   setCurrentBookingId(id);
  //   setShowEditBookingForm(true);
  // };

  // const closeEditBookingForm = () => {
  //   setShowEditBookingForm(false);
  //   setCurrentBookingId(null);
  // };

  const viewExtras = () => {
    setShowExtrasView(true);
  };

  const closeExtrasView = () => {
    setShowExtrasView(false);
  };

  // const handleBookingUpdated = () => {
  //   setShowEditBookingForm(false);
  //   setCurrentBookingId(null);
  //   fetchBookings();
  // };

  const handleExtraCreated = () => {
    setShowExtraForm(false);
  };

  // const fetchBookings = async () => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     const bookings = await UserService.getBookings(token);
  //     setBookings(bookings);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <div className="container mx-auto p-4 pt-32">
      <div className="flex justify-between mb-4 space-x-2">
        <button onClick={() => navigate('/profile')} className="button-dusty">
          Back
        </button>
        <button onClick={addExtra} className="button-purple">
          Add Extra
        </button>
        <button onClick={viewExtras} className="button-purple">
          View Extras
        </button>
      </div>
      <div className="space-y-4">
        {bookings.map((booking, index) => (
          <div key={index} className="bg-dark-grey rounded-lg p-3 flex justify-between items-center border-2 border-gray-500">
            <div className="flex space-x-4 text-lg">
              <p>Guest: {booking.user.email}</p>
              <p>Room: {booking.roomName}</p>
              <p>Check-in: {new Date(booking.checkInDate).toLocaleDateString()}</p>
              <p>Check-out: {new Date(booking.checkOutDate).toLocaleDateString()}</p>
              <p>Cost: {booking.totalCost}</p>
            </div>
            <div className="flex space-x-2">
              {/* <button onClick={() => editBooking(booking.bookingId)} className="button-purple max-h-20">
                Edit
              </button> */}
              <button onClick={() => deleteBooking(booking.bookingId)} className="button-dusty max-h-20">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* {showEditBookingForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded p-6 shadow-lg max-w-2xl w-full relative">
            <button
              onClick={closeEditBookingForm}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              &times;
            </button>
            <EditBookingForm bookingId={currentBookingId} onBookingUpdated={handleBookingUpdated} />
          </div>
        </div>
      )} */}

      {showExtraForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded p-6 shadow-lg max-w-2xl w-full relative">
            <button
              onClick={closeExtraForm}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              &times;
            </button>
            <ExtraForm onExtraCreated={handleExtraCreated} />
          </div>
        </div>
      )}

      {showExtrasView && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center bg-dark-grey">
          <div className="rounded p-6 shadow-lg max-w-2xl w-full relative bg-dark-grey">
            <button
              onClick={closeExtrasView}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              &times;
            </button>
            <ExtrasView extras={extras} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBookings;