import React from 'react';
import UserService from '../../services/UserService';
import { toast } from 'react-toastify';

const ExtrasView = ({ extras }) => {
  const deleteExtra = async (id) => {
    if (window.confirm("Are you sure you want to delete this extra?")) {
      try {
        const token = localStorage.getItem('token');
        await UserService.deleteExtra(token, id);
        toast.success('Extra deleted successfully');
      } catch (error) {
        console.error("Error:", error);
        toast.error('Failed to delete extra');
      }
    }
  };

  return (
    <div className="form-container-room mx-auto p-4 bg-dark-grey">
      <div className="space-y-4">
        {extras.map((extra) => (
          <div key={extra.extraId} className="bg-dark-grey rounded-lg p-3 flex justify-between items-center border-2 border-gray-500 space-x-4">
            <div className="flex flex-col space-y-2">
              <p className="text-lg font-medium">{extra.name}</p>
              <p className="text-md">{extra.description}</p>
              <p className="text-md">Location: {extra.location}</p>
              <p className="text-md">Hours: {extra.hours}</p>
            </div>
            <button
              onClick={() => deleteExtra(extra.extraId)}
              className="button-dusty"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtrasView;