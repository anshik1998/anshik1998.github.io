// src/pages/LeetCode/components/ProblemSelector/index.jsx
import React from 'react';
import { PROBLEMS } from '../../constants';
import './index.css';

const ProblemSelector = ({ onSelectProblem }) => {
    return (
        <div className="problem-selector">
            <select onChange={(e) => onSelectProblem(e.target.value)}>
                <option value="">Select a problem</option>
                {Object.keys(PROBLEMS).map((problemId) => (
                    <option key={problemId} value={problemId}>
                        {PROBLEMS[problemId].title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProblemSelector;