import { useState } from 'react';
import { register } from '../api'; // assuming your API functions are in api.ts

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(form); // Send POST request to the backend
      alert('User registered successfully!');
    } catch (error) {
      alert('Registration failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input 
        type="text" 
        name="username" 
        value={form.username}
        onChange={handleChange}
        placeholder="Username" 
        className="block mb-2 p-2 w-full border"
      />
      <input 
        type="email" 
        name="email" 
        value={form.email}
        onChange={handleChange}
        placeholder="Email" 
        className="block mb-2 p-2 w-full border"
      />
      <input 
        type="password" 
        name="password" 
        value={form.password}
        onChange={handleChange}
        placeholder="Password" 
        className="block mb-2 p-2 w-full border"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Register
      </button>
    </form>
  );
}
