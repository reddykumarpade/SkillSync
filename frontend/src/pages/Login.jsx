import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            const res = await api.post('/auth/login', credentials);
            alert(res.data);
            navigate('/dashboard');
        } catch (err) {
            alert('Login failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input name="username" placeholder="Username" onChange={handleChange} />
            <input name="password" placeholder="Password" type="password" onChange={handleChange} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
