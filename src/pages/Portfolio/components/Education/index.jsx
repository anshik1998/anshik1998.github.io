// Education
import React from 'react';
import logoABIT from './../../../../assets/images/ABIT_Logo.jpg';
import logoIEI from './../../../../assets/images/IEI_Logo.png';
import logoMAIT from './../../../../assets/images/MAIT_Logo.png';
import logoIEMS from './../../../../assets/images/IEMS_Logo.png';
import EducationAndWorkItem from './../EducationAndWorkItem/index.jsx';
import './index.css';

const Education = () => (
    <section className="education">
        <h2 className="section-heading">Education</h2>
        <EducationAndWorkItem
            logo={logoMAIT}
            itemSubHeader="Bachelor of Technology in Computer Science and Engineering"
            itemHeader="Maharaja Agrasen Institute Of Technology, GGSIPU"
            location="New Delhi, India"
            dateRange="Jul 2019 - Jul 2022"
            responsibilities={[
            ]}
            skillTitle="Coursework:"
            skills={['Data Structures and Algorithms', 'Operating System', 'Computer Networks', 'Compiler Design', 'Computer Organization and Architecture', 'Theory of Computation', 'Database Management Systems']}
        />
        <EducationAndWorkItem
            logo={logoIEI}
            itemSubHeader="Bachelor of Engineering in Mechanical Engineering"
            itemHeader="Institute of Engineers of India (IEI), Kolkata"
            location="New Delhi, India"
            dateRange="Jul 2017 - Dec 2019"
            responsibilities={[
            ]}
            skillTitle="Coursework:"
            skills={['Mechanics of Solid', 'Mechanics of Fluid', 'Power Plant Engineering', 'Turbo Machinery', 'Thermal Science and Engineering', 'Internal Combustion Engines']}
        />
        <EducationAndWorkItem
            logo={logoABIT}
            itemSubHeader="Diploma in Mechanical Engineering"
            itemHeader="Aryabhatt Institute of Technology"
            location="New Delhi, India"
            dateRange="Jul 2013 - Jul 2016"
            responsibilities={[
            ]}
            skillTitle="Coursework:"
            skills={['Strength of Materials', 'Material Science', 'Fluid Mechanics', 'Thermodynamics', 'Engineering Drawing', 'Engineering Physics', 'Engineering Chemistry']}
        />
        <EducationAndWorkItem
            logo={logoIEMS}
            itemSubHeader="Matriculation"
            itemHeader="Ingraham English Medium School"
            location="Ghaziabad, India"
            dateRange="May 2011 - May 2013"
            responsibilities={[
            ]}
            skillTitle="Coursework:"
            skills={['English Communications', 'Hindi', 'Mathematics', 'Science', 'Social Science']}
        />
    </section>
);

export default Education;