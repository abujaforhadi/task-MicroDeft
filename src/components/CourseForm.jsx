import React, { useState } from 'react';
import axios from 'axios';

const CourseForm = ({ token }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        badge_text: '',
        badge_color: '',
        instructor_name: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://react-interview.crd4lc.easypanel.host/api/course', formData, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
            <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded"></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Badge Text</label>
                <input type="text" name="badge_text" value={formData.badge_text} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Badge Color</label>
                <input type="text" name="badge_color" value={formData.badge_color} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Instructor Name</label>
                <input type="text" name="instructor_name" value={formData.instructor_name} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Add Course</button>
        </form>
    );
};

export default CourseForm;