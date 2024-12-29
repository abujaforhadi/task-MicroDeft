import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = ({ token }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('https://react-interview.crd4lc.easypanel.host/api/course', {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                setCourses(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCourses();
    }, [token]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {courses.map((course) => (
                <div key={course.id} className="border p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold">{course.title}</h2>
                    <p className="text-gray-700">{course.description}</p>
                    <span className={`inline-block px-2 py-1 text-sm font-semibold text-white bg-${course.badge_color}-500 rounded`}>
                        {course.badge_text}
                    </span>
                    <p className="text-gray-600">Instructor: {course.instructor_name}</p>
                </div>
            ))}
        </div>
    );
};

export default CourseList;