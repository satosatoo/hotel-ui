import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState({
    firstname: '',
    lastname: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProfile();
    fetchBookings();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const profile = await UserService.getProfile(token);
      setUserProfile({
        firstname: profile.firstname || '',
        lastname: profile.lastname || '',
        phoneNumber: profile.phoneNumber || '',
        email: profile.email,
        password: '',
      });
      console.log(profile);
    } catch (error) {
      throw error;
    }
  }

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const bookings = await UserService.getBookings(token);
      setBookings(bookings);
    } catch (error) {
      throw error;
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevUserProfile) => ({
      ...prevUserProfile,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const prof = {
        firstname: userProfile.firstname,
        lastname: userProfile.lastname,
        phoneNumber: userProfile.phoneNumber,
        email: userProfile.email
      };
      if (userProfile.password) {
        prof.password = userProfile.password;
      }

      console.log('Saving profile...', prof);
      const token = localStorage.getItem('token');
      await UserService.updateProfile(token, prof);
      console.log('Profile saved successfully.');
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <div className="container mx-auto pt-32 flex flex-col items-center">
      <div className="bg-dark-grey shadow-md rounded-lg p-6 mb-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Profile Information</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="mb-2">
            <label className="block text-white text-lg font-bold mb-2">First Name:</label>
            <input
              type="text"
              name="firstname"
              value={userProfile.firstname}
              onChange={handleChange}
              disabled={!isEditing}
              className={classNames(
                "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-lg",
                {
                  "text-gray-300": !isEditing,
                  "bg-gray-200": isEditing,
                  "text-dark-grey": isEditing
                }
              )}
            />
          </div>
          <div className="mb-2">
            <label className="block text-white text-lg font-bold mb-2">Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={userProfile.lastname}
              onChange={handleChange}
              disabled={!isEditing}
              className={classNames(
                "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-lg",
                {
                  "text-gray-300": !isEditing,
                  "bg-gray-200": isEditing,
                  "text-dark-grey": isEditing
                }
              )}
            />
          </div>
          <div className="mb-2">
            <label className="block text-white text-lg font-bold mb-2">Phone:</label>
            <input
              type="text"
              name="phoneNumber"
              value={userProfile.phoneNumber}
              onChange={handleChange}
              disabled={!isEditing}
              className={classNames(
                "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-lg",
                {
                  "text-gray-300": !isEditing,
                  "bg-gray-200": isEditing,
                  "text-dark-grey": isEditing
                }
              )}
            />
          </div>
          <div className="mb-2">
            <label className="block text-white text-lg font-bold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={userProfile.email}
              onChange={handleChange}
              disabled
              className={classNames(
                "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-lg",
                {
                  "text-gray-300": !isEditing,
                  "bg-gray-400": isEditing,
                  "text-dark-grey": isEditing
                }
              )}
            />
          </div>
          {isEditing && (
            <div className="mb-2">
              <label className="block text-white text-lg font-bold mb-2">Password:</label>
              <input
                type="password"
                name="password"
                value={userProfile.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-dark-grey leading-tight focus:outline-none focus:shadow-outline text-lg bg-gray-200"
              />
            </div>
          )}
        </div>
        <div className="flex justify-end mt-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-custom-purple text-white duration-200 hover:bg-custom-purple-hover hover:text-indigo-200 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline mr-2 w-full text-lg"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-dusty-rose text-white duration-200 hover:bg-dusty-rose-hover hover:text-indigo-200 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full text-lg"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-custom-purple text-white duration-200 hover:bg-custom-purple-hover hover:text-indigo-200 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full text-lg"
            >
              Edit
            </button>
          )}
        </div>
      </div>

      {UserService.isAdmin() ? (
        <div className="bg-dark-grey shadow-md rounded-lg p-6 mb-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Admin Panel</h2>
        {/* Admin Controls for managing rooms, amenities, etc. */}
        <div>
          <Link to='/manage/rooms' className='bg-custom-purple text-white duration-200 hover:bg-custom-purple-hover hover:text-indigo-200 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full text-lg'>
            Manage rooms
          </Link>
          {/* Add more admin controls as needed */}
        </div>
      </div>
      ) : (
        <div className="bg-dark-grey shadow-md rounded-lg p-6 text-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Bookings</h2>
        {bookings.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {bookings.map((booking) => (
          <li key={booking.reservationId} className="py-4">
          <div className="flex flex-row justify-between items-center space-x-4">
            <div><strong>Check-In:</strong> {booking.checkInDate}</div>
            <div><strong>Check-Out:</strong> {booking.checkOutDate}</div>
            <div><strong>Room:</strong> {booking.room.name}</div>
            <div><strong>Total Cost:</strong> {booking.totalCost}</div>
          </div>
          </li>
          ))}
        </ul>
        ) : (
        <div className='text-center'>No bookings found.</div>
        )}
      </div>
      )}
    </div>
  )
}

export default ProfilePage