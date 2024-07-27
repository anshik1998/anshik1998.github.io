import React from 'react';
import './index.css';

const EducationAndWorkItem = ({ logo, itemSubHeader, itemHeader, location, dateRange, responsibilities, skillTitle, skills }) => (
    <div className="edu-work-item">
        <img src={logo} alt={itemSubHeader} className="item-logo" />
        <div className="edu-work-content">
            <div className="edu-work-header">
                <h3>{itemHeader}</h3>
                <span className="date-range">{dateRange}</span>
            </div>
            <p className="item-info">{itemSubHeader} • {location}</p>
            <ul className="responsibilities">
                {responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                ))}
            </ul>
            {skills &&
                <div className="skills-container">
                    <h4>{skillTitle}</h4> {skills.map(skill => (
                        <div className="skill-tag" key={skill}><span>{skill}</span></div>
                    ))}
                </div>
            }
        </div>
    </div>
);

export default EducationAndWorkItem;