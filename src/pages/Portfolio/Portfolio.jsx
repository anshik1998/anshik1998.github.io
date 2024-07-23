// Portfolio.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import SidebarPanel from './components/Sidebar';
import './portfolio.css';

const Portfolio = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleSidebarVisibility = (isVisible) => {
        setIsSidebarVisible(isVisible)
    }

    return (
        <div className={`wrapper ${isSidebarVisible ? 'sidebar-visible' : ''}`}>
            <SidebarPanel onVisibilityChange={handleSidebarVisibility} />
            <Header />
            <div className="container">
                <WorkExperience />
                <Education />
                <Skills />
                <Certificates />
                <Projects />
                {/* <Blog /> */}
            </div>
        </div>
    );
};

export default Portfolio;