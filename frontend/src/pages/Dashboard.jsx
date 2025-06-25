import React from 'react';
import SkillForm from '../components/SkillForm';
import ProjectList from '../components/ProjectList';

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <SkillForm />
            <ProjectList />
        </div>
    );
};

export default Dashboard;
