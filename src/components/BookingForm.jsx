import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function BookingForm({ room, search, onBack, onSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [policy, setPolicy] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'First name is required';
    if (!lastName) newErrors.lastName = 'Last name is required';
    if (!phone) newErrors.phone = 'Phone number is required';
    if (!policy) newErrors.policy = 'You must agree to the policy';
    if (!cardNumber) newErrors.cardNumber = 'Card number is required';
    if (!cvv) newErrors.cvv = 'CVV is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    const reservation = {
      checkInDate: search.checkIn,
      checkOutDate: search.checkOut,
      policyAcknowledged: policy,
      firstName,
      lastName,
      phone,
      cardNumber,
      cvv
    }

    if (Object.keys(formErrors).length === 0) {
      onSubmit(room, reservation);
      toast.success('Reservation created successfully');
      return navigate('/');
    } else {
      setErrors(formErrors);
      toast.error('Failed to create reservation');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-3 text-white text-lg mt-24 rounded">
      <h2 className="text-xl font-bold mb-4">Booking Form for {room.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border p-2 text-dark-grey rounded w-full"
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block mb-1">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border p-2 text-dark-grey rounded w-full"
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
        </div>
        <div>
          <label className="block mb-1">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 text-dark-grey rounded w-full"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1">Personal Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border p-2 text-dark-grey rounded w-full"
          ></textarea>
        </div>
        <div className="md:col-span-2 flex items-center">
          <input
            type="checkbox"
            checked={policy}
            onChange={(e) => setPolicy(e.target.checked)}
            className="mr-2"
          />
          <label>I agree to the policy</label>
        </div>
        {errors.policy && <p className="text-red-500 md:col-span-2">{errors.policy}</p>}
        <div>
          <label className="block mb-1">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="border p-2 text-dark-grey rounded w-full"
          />
          {errors.cardNumber && <p className="text-red-500">{errors.cardNumber}</p>}
        </div>
        <div>
          <label className="block mb-1">CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="border p-2 text-dark-grey rounded w-full"
          />
          {errors.cvv && <p className="text-red-500">{errors.cvv}</p>}
        </div>
        <button type="submit" className="bg-custom-white text-dark-grey rounded text-lg p-3 md:col-span-2 duration-150 hover:bg-custom-purple hover:text-white cursor-pointer mt-2">
          Book Now
        </button>
      </div>
      <button onClick={onBack} className="bg-gray-500 text-white p-3 mt-4 rounded duration-150 hover:bg-custom-purple hover:text-white cursor-pointer">
        Back to Search
      </button>
    </form>
  );
}

export default BookingForm;