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
    await axios.put('/api/user', profile, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  };

  static async getExtras() {
    return await axios.get('/api/extra/');
  }

  static async getRooms() {
    return await axios.get('/api/room/');
  }


  static isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  static isAdmin() {
    return localStorage.getItem('role') === 'ADMIN';
  }

  static isUser() {
    return localStorage.getItem('role') === 'USER';
  }

  static logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}

export default UserService;