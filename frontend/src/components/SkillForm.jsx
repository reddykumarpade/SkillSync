import React, { useState } from 'react';
import api from '../api';

const SkillForm = () => {
    const [skill, setSkill] = useState({ name: '', level: '' });

    const handleChange = (e) => {
        setSkill({ ...skill, [e.target.name]: e.target.value });
    };

    const addSkill = async () => {
        try {
            await api.post('/users/1/skills', skill); // Hardcoded userId = 1
            alert('Skill added');
        } catch {
            alert('Error adding skill');
        }
    };

    return (
        <div>
            <h4>Add Skill</h4>
            <input name="name" placeholder="Skill" onChange={handleChange} />
            <input name="level" placeholder="Level" onChange={handleChange} />
            <button onClick={addSkill}>Add</button>
        </div>
    );
};

export default SkillForm;
