import React, { useState, useEffect } from "react";
import "./index.css";
import SocialNavigation from "../SocialNavigation";
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const SidebarPanel = ({ onVisibilityChange, userName = "Guest" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPinned, setIsPinned] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDark);
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    const showSidebar = () => {
        if (!isPinned) {
            setIsVisible(true);
            onVisibilityChange(true);
        }
    };

    const hideSidebar = () => {
        if (!isPinned) {
            setIsVisible(false);
            onVisibilityChange(false);
        }
    };

    const toggleSidebar = () => {
        setIsVisible(!isVisible);
        onVisibilityChange(!isVisible);
    };

    const togglePin = () => {
        setIsPinned(!isPinned);
        onVisibilityChange(!isPinned);
    };

    const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <button
                className={`hamburger ${isVisible || isPinned ? "hidden" : ""}`}
                onClick={toggleSidebar}
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <div
                className={`sidebar ${isVisible || isPinned ? "visible" : ""} ${isPinned ? "pinned" : ""} ${isMobile ? "mobile" : ""}`}
                onMouseEnter={showSidebar}
                onMouseLeave={hideSidebar}
            >
                <div className="sidebar-content">
                    <div className="logo-container">
                        {/* <img src='https://picsum.photos/150/50' alt="Website Logo" className="logo" /> */}
                        <h1>Anshik Bansal</h1>
                    </div>
                    <nav className="menu-section">
                        <ul>
                            <li><Link to="/">About Me</Link></li>
                            <li><Link to="/problem-solving">Problem Solving</Link></li>
                            {/* <li><a href="/#work-experience">Work Experience</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li> */}
                        </ul>
                    </nav>
                    {/* <div className="profile-section">
                        <button className="profile-button" onClick={toggleProfile}>
                            <img src='https://i.pravatar.cc/32' alt="User Avatar" />
                            <span className="user-name">{userName}</span>
                            <span className="chevron-down"></span>
                        </button>
                        {isProfileOpen && (
                            <div className="profile-dropdown">
                                <a href="#view-profile">View Profile</a>
                                <a href="#signout">Sign Out</a>
                            </div>
                        )}
                    </div> */}
                </div>
                <button className="pin-button" onClick={togglePin}>
                    <FontAwesomeIcon icon={faThumbTack} size="2xl" className={`pin-icon ${isPinned ? "pinned" : ""}`} />
                </button>
                <SocialNavigation isDark={isDark} toggleTheme={toggleTheme} />
            </div>
        </>
    );
};

export default SidebarPanel;