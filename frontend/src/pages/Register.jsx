import React, { useState } from 'react';
import api from '../api';

const Register = () => {
    const [user, setUser] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        try {
            const res = await api.post('/auth/register', user);
            alert(res.data);
        } catch (err) {
            alert('Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input name="username" placeholder="Username" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" placeholder="Password" type="password" onChange={handleChange} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
