// src/pages/LeetCode/hooks/useProblem.js
import { useState } from 'react';
import { PROBLEMS } from '../constants';

export const useProblem = () => {
    const [currentProblem, setCurrentProblem] = useState(null);

    const selectProblem = (problemId) => {
        setCurrentProblem(PROBLEMS[problemId]);
    };

    return { currentProblem, selectProblem };
};