import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import EditUserForm from './EditUserForm';
import UserService from '../../services/UserService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showEditUserForm, setShowEditUserForm] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await UserService.getUsers(token);
        setUsers(response.data);
      } catch (error) {
        console.error("Error: " + error);
      }
    };

    fetchUsers();
  }, []);

  const addUser = () => {
    setShowUserForm(true);
  };

  const closeUserForm = () => {
    setShowUserForm(false);
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const token = localStorage.getItem('token');
        await UserService.deleteUser(token, id);
        setUsers(users.filter(user => user.userId !== id));
        toast.success('User deleted successfully');
      } catch (error) {
        console.error("Error:", error);
        toast.error('Failed to delete user');
      }
    }
  };

  const editUser = (id) => {
    setCurrentUserId(id);
    setShowEditUserForm(true);
  };

  const closeEditUserForm = () => {
    setShowEditUserForm(false);
    setCurrentUserId(null);
  };

  const handleUserCreated = () => {
    setShowUserForm(false);
    fetchUsers();
  };

  const handleUserUpdated = () => {
    setShowEditUserForm(false);
    setCurrentUserId(null);
    fetchUsers();
  };

  const fetchUsers = async () => {
    try {
      const response = await UserService.getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 pt-32">
      <div className="flex justify-between mb-4 space-x-2">
        <button onClick={() => navigate('/profile')} className="button-dusty">
          Back
        </button>
        <button onClick={addUser} className="button-purple">
          Add Admin
        </button>
      </div>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div key={index} className="bg-dark-grey rounded-lg p-3 flex justify-between items-center border-2 border-gray-500">
            <div className="flex space-x-4 text-lg">
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
              <p>Phone number: {user.phoneNumber}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => editUser(user.userId)} className="button-purple max-h-20">
                Edit
              </button>
              <button onClick={() => deleteUser(user.userId)} className="button-dusty max-h-20">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showUserForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded p-6 shadow-lg max-w-2xl w-full relative">
            <button
              onClick={closeUserForm}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              &times;
            </button>
            <UserForm onUserCreated={handleUserCreated} />
          </div>
        </div>
      )}

      {showEditUserForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded p-6 shadow-lg max-w-2xl w-full relative">
            <button
              onClick={closeEditUserForm}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
            >
              &times;
            </button>
            <EditUserForm userId={currentUserId} onUserUpdated={handleUserUpdated} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;