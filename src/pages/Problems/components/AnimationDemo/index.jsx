// src\pages\Problems\components\AnimationDemo\index.jsx
import React from 'react';
import './index.css';

const AnimationDemo = ({ problem }) => {
    if (!problem || !problem.renderAnimation) {
        return <div>Animation not available for this problem.</div>;
    }

    return (
        <div className="animation-demo">
            {problem.renderAnimation()}
        </div>
    );
};

export default AnimationDemo;