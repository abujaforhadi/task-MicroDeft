import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://react-interview.crd4lc.easypanel.host/api/login', formData, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            setToken(response.data.token);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        </form>
    );
};

export default Login;