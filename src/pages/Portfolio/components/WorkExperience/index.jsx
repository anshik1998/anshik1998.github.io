// WorkExperience
import React from 'react';
import './index.css';
import EducationAndWorkItem from '../EducationAndWorkItem/index.jsx';
import logoSafeZen from './../../../../assets/images/SafeZen_Logo.png';
import logoFreelancer from './../../../../assets/images/Freelancer_Logo.jpeg';
import logoPaisaBachat from './../../../../assets/images/PaisaBachat_Logo.png';
import logoBechtel from './../../../../assets/images/Bechtel_Logo.jpg';
import bvmdotshLogo from './../../../../assets/images/bvmdotsh_Logo.png';

const WorkExperience = () => (
    <section className="work-experience">
        <h2 className="section-heading">Work Experience</h2>
        <EducationAndWorkItem
            logo={bvmdotshLogo}
            itemSubHeader="bvmdotsh"
            itemHeader="Founder and CEO"
            location="Ghaziabad, Uttar Pradesh, India"
            dateRange="Oct 2023 - Present"
            responsibilities={[
                "Designed and developed a custom Chrome Extension that automates repetitive digital tasks, including web browsing, API calls, website scraping, automated software testing, increasing productivity and efficiency.",
                "Created APIs for seamless integration, enabling developers to incorporate the tool into their workflows and projects, expanding its capabilities and use-cases."
            ]}
            skills={[' NodeJS', 'Socket.io', 'Puppeteer', 'LangChain', 'ReactJS', 'MongoDB', 'Amazon EC2', 'CloudFlare R2', 'Load Balancer', 'Elastic IP', 'SES']}
        />
        <EducationAndWorkItem
            logo={logoSafeZen}
            itemSubHeader="SafeZen"
            itemHeader="Founder and CEO"
            location="Ghaziabad, Uttar Pradesh, India"
            dateRange="Jun 2022 - Jul 2023"
            responsibilities={[
                "Responsible for leading a team of 3, writing smart contracts in solidity and developing innovative insurance products.",
                "Responsible for developing production-ready smart contracts, integrating web3 projects and implementing major EIPs.",
                "Secured $10,000 grant from AAVE Grants DAO to keep advancing our mission of decentralizing the insurance industry."
            ]}
            skills={['Solidity', 'ReactJS', 'EthersJS', 'Ganache', 'Hardhat', 'Smart Contracts']}
        />
        <EducationAndWorkItem
            logo={logoPaisaBachat}
            itemSubHeader="Paisa Bachat"
            itemHeader="Founder and CEO"
            location="Ghaziabad, Uttar Pradesh, India"
            dateRange="Jan 2019 - Oct 2020"
            responsibilities={[
                "Headed and designed a website on WordPress Open Source CMS platform.",
                "Responsible for offering deals, offers, and coupons from leading e-Commerce platforms via Affiliate REST API’s."
            ]}
            skills={['Python', 'BeautifulSoup', 'Selenium', 'WordPress', 'Amazon EC2', 'MySQL']}
        />
        <EducationAndWorkItem
            logo={logoFreelancer}
            itemSubHeader="Freelancer.com"
            itemHeader="Professional Freelancer"
            location="Ghaziabad, Uttar Pradesh, India"
            dateRange="Mar 2019 - Jul 2020"
            responsibilities={[
                "Designed websites from scratch on Open-Source CMS platforms including WordPress and Shopify.",
                "Deployed and integrate client’s websites on Amazon Web Services, Google Cloud, and other web-hosting providers.",
                "Collaborated with team members using version control system Git to organize modifications for the assigned tasks."
            ]}
            skills={['Python', 'Beautiful Soup', 'Requests', 'Selenium', 'WordPress', 'JSON', 'FileZilla']}
        />
        <EducationAndWorkItem
            logo={logoBechtel}
            itemSubHeader="Bechtel India Private Limited"
            itemHeader="Senior Draughtsman"
            location="Gurugram, Haryana, India"
            dateRange="Jun 2016 - Oct 2017"
            responsibilities={[
                "Equipment and Pipe Modeling in Smart Plant 3D",
                "Responsible for drafting Piping General Arrangement Drawings & Equipment General Arrangement Drawing.",
                "Incorporation of back-draft comments and extraction of Isometrics Drawing. ",
                "Prepared Bill of Material in coordination with Piping Senior Engineer."
            ]}
            skills={['Smart Plant 3D', 'SP3D Smart Sketch', 'Microstation 2D']}
        />
    </section>
);

export default WorkExperience;