import axios from "axios";


class UserService {

  static async login(userData) {
    try {
      const response = await axios.post('/api/auth/login', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async registerUser(userData) {
    try {
      const response = await axios.post('/api/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getProfile(token) {
    try {
      const response = await axios.get('/api/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
      }
      catch (error) {
        throw error;
      }
  }

  static async getBookings(token) {
    try {
      const response = await axios.get('/api/reservation/all', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async createReservation(token, room, reservation) {
    const response = await axios.post(`/api/reservation/${room.roomId}`, reservation, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response;
  };

  static async getAvailableRooms(token, search) {
    const queryParams = new URLSearchParams({
      checkInDate: search.checkIn,
      checkOutDate: search.checkOut,
      people: search.people
    }).toString();

    const rooms = await axios.get(`/api/room/available?${queryParams}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return rooms.data;
  };

  static async updateProfile(token, profile) {
    await axios.put('/api/user/', profile, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  };

  static async createRoom(token, room) {
    await axios.post('/api/room/', room, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static async createRoomFacility(token, roomFacility) {
    await axios.post('/api/room/facility/', roomFacility, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static async deleteRoomFacility(token, id) {
    return await axios.delete(`/api/room/facility/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
    });
  };

  static async deleteRoom(token, id) {
    await axios.delete(`/api/room/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
    });
  };

  static async updateRoom(token, roomId, room) {
    await axios.put(`/api/room/${roomId}`, room, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  static async getUsers(token) {
    return await axios.get('/api/user/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static async getUser(token, id) {
    return await axios.get(`/api/user/id/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static async deleteUser(token, id) {
    await axios.delete(`/api/user/id/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static async createAdmin(token, admin) {
    return await axios.post('/api/auth/register-admin', admin, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static async getRoom(token, roomId) {
    return await axios.get(`/api/room/${roomId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static async deleteBooking(token, id) {
    await axios.delete(`/api/reservation/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static async createExtra(token, extra) {
    await axios.post('/api/extra/', extra, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static async getExtras() {
    return await axios.get('/api/extra/');
  };

  static async getRooms() {
    return await axios.get('/api/room/');
  };

  static async getRoomFacilities() {
    return await axios.get('/api/room/facility/');
  };



  static isAuthenticated() {
    return !!localStorage.getItem('token');
  };

  static isAdmin() {
    return localStorage.getItem('role') === 'ADMIN';
  };

  static isUser() {
    return localStorage.getItem('role') === 'USER';
  };

  static logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };
}

export default UserService;