// src/pages/LeetCode/components/ProblemDescription/index.jsx
import React from 'react';
import './index.css';

const ProblemDescription = ({ problem }) => {
    if (!problem) return <div className='problem-selection'>Please select a problem.</div>;

    return (
        <div className="problem-description">
            <h2>{problem.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: problem.description }} />
        </div>
    );
};

export default ProblemDescription;