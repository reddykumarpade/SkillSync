import React, { useEffect, useState } from 'react';
import api from '../api';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await api.get('/projects');
            setProjects(res.data);
        };
        fetchProjects();
    }, []);

    return (
        <div>
            <h4>Projects</h4>
            <ul>
                {projects.map((p) => (
                    <li key={p.id}>{p.title} - {p.requiredSkills}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
