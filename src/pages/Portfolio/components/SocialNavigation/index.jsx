// SocialNavigation
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const ThemeToggle = ({ isDark, toggleTheme }) => (
    <button onClick={toggleTheme} className="theme-toggle">
        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
    </button>
);

const SocialNavigation = ({ isDark, toggleTheme }) => (
    <nav className="social-nav">
        <a href="/"><FontAwesomeIcon icon={faHouse} /></a> |
        <a href="https://twitter.com/anshik1998"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://linkedin.com/in/anshik1998"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/anshik1998"><FontAwesomeIcon icon={faGithub} /></a>|
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
    </nav>
);

export default SocialNavigation;