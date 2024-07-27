import React, { useEffect, useRef } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import Project1 from './../../../../assets/images/Project_1.PNG';
import Project2 from './../../../../assets/images/Project_2.PNG';
import Project3 from './../../../../assets/images/Project_3.PNG';

const ProjectCard = ({ title, date, location, description, skills, logo, link }) => (
    <div className="project-card">
        <img src={logo} alt={title} className="project-logo" />
        <div className="project-info">
            <h3 className="project-title">{title}</h3>
            <p className="project-location">{location}</p>
            <p className="project-date"><strong>Developed in:</strong> {date}</p>
            <p className="project-description">{description}</p>

            <p className="project-skills">
                {skills.map(skill => (
                    <div className="skill-tag" key={skill}><span>{skill}</span></div>
                ))}
            </p>
            <div className="project-link">
                {
                    link &&
                    link.map((link, index) => (
                        <a href={link.href}> <button className="project-button">{link.title} <FontAwesomeIcon icon={faExternalLink} /></button></a>
                    ))
                }
            </div>
        </div>
    </div>
);

const Projects = () => {
    const scrollRef = useRef(null);

    const projects = [
        {
            title: ' COVID-19 Resources In India- Web App',
            date: 'May 2021',
            description: 'Built a web app that offers users live verified leads from various online resources, sourced via API and scraping data using Pandas or Beautiful Soup.',
            skills: ['Python', 'Data Science', 'Amazon EC2', 'FileZilla', 'Putty'],
            logo: Project1,
            link: [{
                title: 'Source Code',
                href: 'https://github.com/anshik1998/covid19-resources/'
            }]
        },
        {
            title: 'Motor Vehicle Collisions Data Science Web App',
            date: 'May 2020',
            description: 'Created a web app to observe the number of vehicle collisions that happened in New York City, United States from open source data available at NYC Open Data.',
            skills: ['Python', 'Data Science', 'Streamlit', 'Pandas'],
            logo: Project2,
            link: [{
                title: 'Source Code',
                href: 'https://github.com/anshik1998/streamlit-data-science-webapp'
            }, {
                'title': 'Open Source Data',
                'href': 'https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95'
            }]
        },
        {
            title: 'AI Creators',
            date: 'Sep 2023',
            description: 'Built a web platform to fetch the images from Text-to-Image Generative AI tools, such as Midjourney, upscaling the images using ML libraries, and uploading the images on IPFS using Pinata.',
            skills: ['ReactJS', 'Discord', 'AWS', 'Pinata'],
            logo: Project3,
            link: [{
                'title': 'Code on Request',
                'href': 'mailto:anshik1998@gmail.com'
            }]
        }
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            const scrollWidth = scrollContainer.scrollWidth;
            const containerWidth = scrollContainer.clientWidth;
            const animationDuration = scrollWidth * 20; // Adjust speed here

            const scroll = () => {
                if (scrollContainer.scrollLeft >= scrollWidth - containerWidth) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 1;
                }
            };

            const animationId = setInterval(scroll, animationDuration / scrollWidth);

            return () => clearInterval(animationId);
        }
    }, []);

    return (
        <section className="projects-section">
            <h2 className="section-heading">Projects</h2>
            <div className="slider-container">
                <div
                    ref={scrollRef}
                    className="slider-track"
                >
                    {[...projects, ...projects].map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
