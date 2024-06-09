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
      const response = await axios.post('http://localhost:8080/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
}

export default UserService;