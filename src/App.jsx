import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';


const App = () => {
    const [token, setToken] = useState('');

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center my-8">Microdeft React Test</h1>
            {!token ? (
                <>
                    <Register />
                    <Login setToken={setToken} />
                </>
            ) : (
                <>
                    <CourseForm token={token} />
                    <CourseList token={token} />
                </>
            )}
        </div>
    );
};

export default App;