import { useState } from "react";
import UserService from "../../services/UserService";
import { toast } from 'react-toastify';

const RoomFacilitiesView = ({facilities: initialFacilities}) => {
  const [facilities, setFacilities] = useState(initialFacilities);

  const deleteFacility = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.deleteRoomFacility(token, id);
      setFacilities(facilities.filter(facility => facility.facilityId !== id));
      toast.success('Room facility deleted successfully');
    } catch (error) {
      console.error("Error:", error);
      toast.error('Failed to delete room facility');
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        {facilities.map((facility, index) => (
          <div key={index} className="bg-dark-grey rounded-lg p-3 border-2 border-gray-500">
            <div className="flex justify-between items-center">
              <p className="text-lg">{facility.name}</p>
              <button 
                onClick={() => deleteFacility(facility.facilityId)} 
                className="bg-dusty-rose duration-200 hover:bg-dusty-rose-hover text-white py-2 px-4 rounded w-24 h-10 flex-shrink-0">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomFacilitiesView;