import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true, // Allow cross-origin requests with credentials
});

// Interceptor to include JWT token in the Authorization header for all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get the token from localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Include the token in the headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Handle any errors
  }
);

export const register = (data: any) => api.post('/register', data);
export const login = (data: any) => api.post('/login', data);
