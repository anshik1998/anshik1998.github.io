import React, { useEffect, useRef } from 'react';
import './Certificates.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import logoKaggle from './../../../assets/images/Kaggle_Logo.webp';
import logoStanford from './../../../assets/images/Stanford_Logo.webp';
import logoHackerRank from './../../../assets/images/Hackerrank_Logo.png';
import logoUOM from './../../../assets/images/UOM_Logo.png';

const CertificateCard = ({ title, date, location, description, skills, logo, verifyLink }) => (
    <div className="certificate-card">
        <img src={logo} alt={title} className="certificate-logo" />
        <h3 className="certificate-title">{title}</h3>
        <p className="certificate-location">{location}</p>
        <p className="certificate-date"><strong>Issued:</strong> {date}</p>
        <p className="certificate-description">{description}</p>

        <p className="certificate-skills"><strong>Skills:</strong>
            {skills.map(skill => (
                <div className="skill-tag" key={skill}><span>{skill}</span></div>
            ))}
        </p>
        <button className="certificate-button"><a href={verifyLink}>Verify Credentials <FontAwesomeIcon icon={faExternalLink} /></a></button>
    </div>
);

const Certificates = () => {
    const scrollRef = useRef(null);

    const hackathons = [
        {
            title: 'Divide and Conquer, Sorting and Searching, and Randomized Algorithms',
            date: 'Oct 2020',
            location: 'Stanford University - Coursera',
            description: 'Learnt about sorting and searching, divide and conquer, and randomized algorithms as part .',
            skills: ['Intermediate', 'Algorithms', 'Problem Solving'],
            logo: logoStanford,
            verifyLink: "https://www.coursera.org/account/accomplishments/verify/S5Y96BN2GGGN"
        },
        {
            title: 'Shortest Paths Revisited, NP-Complete Problems and What To Do About Them',
            date: 'Oct 2020',
            location: 'Stanford University - Coursera',
            description: 'Learnt about shortest paths, dynamic programming and NP completeness.',
            skills: ['Intermediate', 'Algorithms', 'Problem Solving'],
            logo: logoStanford,
            verifyLink: "https://www.coursera.org/account/accomplishments/verify/YEZSHXBYTCJ2"
        },
        {
            title: 'Problem Solving (Intermediate)',
            date: 'Oct 2021',
            location: 'HackerRank',
            description: 'Covered intermediate topics of Data Structures and Algorithms.',
            skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Intermediate'],
            logo: logoHackerRank,
            verifyLink: "https://www.hackerrank.com/certificates/7b7fea6fb37f"
        },
        {
            title: 'Python Data Structures',
            date: 'Jul 2020',
            location: 'University of Michigan - Coursera',
            description: 'Learnt about the basic and intermediate concepts of data structures.',
            skills: ['Data Structures', 'Problem Solving', 'Intermediate'],
            logo: logoUOM,
            verifyLink: "https://www.coursera.org/account/accomplishments/verify/CZWGVZHCANEG"
        },
        {
            title: 'Intro to Machine Learning',
            date: 'Apr 2021',
            location: 'Kaggle',
            description: 'Learnt about data exploration, feature engineering, ML algorithms, model validation and fine-tuning.',
            skills: ['Machine Learning', "Beginner"],
            logo: logoKaggle,
            verifyLink: "https://www.kaggle.com/learn/certification/anshik1998/intro-to-machine-learning"
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

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = container.offsetWidth;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="hackathons-section">
            <h2 className="section-heading">Certificates</h2>
            <div className="slider-container">
                <div
                    ref={scrollRef}
                    className="slider-track"
                >
                    {[...hackathons, ...hackathons].map((hackathon, index) => (
                        <CertificateCard key={index} {...hackathon} />
                    ))}
                </div>
                {/* <button
                    onClick={() => scroll('left')}
                    className="scroll-button left-button"
                >
                    &lt;
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="scroll-button right-button"
                >
                    &gt;
                </button> */}
            </div>
        </section>
    );
};

export default Certificates;
