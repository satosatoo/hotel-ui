// import React, { useState, useEffect } from 'react';
// import UserService from '../../services/UserService';
// import { toast } from 'react-toastify';

// const EditBookingForm = ({ bookingId, onBookingUpdated }) => {
//   const [booking, setBooking] = useState({
//     guestName: '',
//     roomNumber: '',
//     checkInDate: '',
//     checkOutDate: '',
//     extras: []
//   });
//   const [extrasOptions, setExtrasOptions] = useState([]);

//   useEffect(() => {
//     const fetchBooking = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await UserService.getBooking(token, bookingId);
//         const data = response.data;
//         setBooking({
//           guestName: data.guestName,
//           roomNumber: data.roomNumber,
//           checkInDate: data.checkInDate,
//           checkOutDate: data.checkOutDate,
//           extras: data.extras
//         });
//       } catch (error) {
//         console.error('Error fetching booking: ', error);
//       }
//     };

//     const fetchExtras = async () => {
//       try {
//         const response = await UserService.getExtras();
//         setExtrasOptions(response.data);
//       } catch (error) {
//         console.error('Error fetching extras: ', error);
//       }
//     };

//     fetchBooking();
//     fetchExtras();
//   }, [bookingId]);

//   const handleExtrasChange = (e) => {
//     const { name, checked } = e.target;
//     setBooking((prevBooking) => {
//       const extras = checked
//         ? [...prevBooking.extras, { name, extraId: e.target.dataset.id }]
//         : prevBooking.extras.filter(extra => extra.name !== name);
//       return {
//         ...prevBooking,
//         extras
//       };
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBooking((prevBooking) => ({
//       ...prevBooking,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token');
//       await UserService.updateBooking(token, bookingId, booking);
//       toast.success('Booking updated successfully');
//       if (onBookingUpdated) {
//         onBookingUpdated();
//       }
//     } catch (error) {
//       console.error('Error updating booking:', error);
//       toast.error('Failed to update booking');
//     }
//   };

//   return (
//     <div className="form-container-booking max-w-xl mx-auto p-4 space-y-4 bg-white text-dark-grey shadow-md rounded h-full overflow-auto">
//       <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">Edit Booking</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-md font-medium text-gray-700">Guest Name</label>
//           <input
//             type="text"
//             name="guestName"
//             value={booking.guestName}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
//             required
//             minLength={2}
//             maxLength={100}
//           />
//         </div>

//         <div>
//           <label className="block text-md font-medium text-gray-700">Room Number</label>
//           <input
//             type="text"
//             name="roomNumber"
//             value={booking.roomNumber}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-md font-medium text-gray-700">Check-in Date</label>
//           <input
//             type="date"
//             name="checkInDate"
//             value={booking.checkInDate}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-md font-medium text-gray-700">Check-out Date</label>
//           <input
//             type="date"
//             name="checkOutDate"
//             value={booking.checkOutDate}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-1"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-md font-medium text-gray-700">Extras</label>
//           <div className="mt-1 block w-full rounded-md border border-dark-grey shadow-sm focus:border-custom-purple focus:ring-custom-purple sm:text-md p-2">
//             {extrasOptions.map((extra) => (
//               <div key={extra.extraId} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id={`extra-${extra.extraId}`}
//                   name={extra.name}
//                   data-id={extra.extraId}
//                   checked={booking.extras.some(ext => ext.name === extra.name)}
//                   onChange={handleExtrasChange}
//                   className="mr-2"
//                 />
//                 <label htmlFor={`extra-${extra.extraId}`} className="text-md font-medium text-gray-700">
//                   {extra.name}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="inline-flex items-center px-4 py-3 border border-transparent text-md font-medium rounded-md shadow-sm text-white bg-custom-purple duration-200 hover:bg-custom-purple-hover hover:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-purple w-full justify-center"
//         >
//           Update Booking
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditBookingForm;