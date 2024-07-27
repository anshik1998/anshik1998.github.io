// Skills
import React from 'react';
import './index.css';

const skillsContainer = (title, skills) => {
    return (
        <div className="skills-container">
            <h4>{title}</h4>
            <div className="skills-tags-wrapper">
                {skills.map(skill => (
                    <div className="skill-tag" key={skill}><span>{skill}</span></div>
                ))}
            </div>
        </div>
    )
}

const Skills = () => {
    const programmingLanguages = ['Python', 'JavaScript', 'Solidity', 'Dart', 'C', 'C++', 'SQL', 'Circom'];
    const libraries = ['ReactJS', 'LangChain', 'Puppeteer', 'Selenium', 'Socket.io', 'Regex', 'Numpy', 'Pandas', 'Matplotlib', 'EthersJs', 'Web3Js'];
    const platforms = ['Amazon Web Services', 'Google Cloud Platform', 'CloudFlare'];
    const openSource = ['Git', 'GitHub', 'Ganache', 'MongoDB', 'ExpressJS', 'NodeJS', 'MySQL', 'Flutter', 'FileZilla', 'Putty'];
    const toolsTesting = ['Remix', 'Pycharm', 'VS Code', 'Jupyter Notebook', 'Android Studio', 'Brownie', 'Hardhat'];

    return (
        <section className="skills">
            <h2 className="section-heading">Skills</h2>
            {skillsContainer('Programming Languages', programmingLanguages)}
            {skillsContainer('Libraries', libraries)}
            {skillsContainer('Platforms', platforms)}
            {skillsContainer('Open Source', openSource)}
            {skillsContainer('Tools & Testing', toolsTesting)}
        </section>
    );
};

export default Skills;
