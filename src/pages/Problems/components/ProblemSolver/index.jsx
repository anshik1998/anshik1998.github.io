// src/pages/LeetCode/components/ProblemSolver/index.jsx
import React, { useState } from 'react';
import './index.css';

const ProblemSolver = ({ problem }) => {
    const [userSolution, setUserSolution] = useState('');
    const [result, setResult] = useState(null);

    if (!problem) return null;

    const handleSubmit = () => {
        const testCases = problem.testCases;
        const results = testCases.map(testCase => {
            try {
                const userFunc = new Function('return ' + userSolution)();
                const output = userFunc(...testCase.input);
                return {
                    passed: JSON.stringify(output) === JSON.stringify(testCase.output),
                    input: testCase.input,
                    expectedOutput: testCase.output,
                    actualOutput: output,
                };
            } catch (error) {
                return { passed: false, error: error.message };
            }
        });
        setResult(results);
    };

    return (
        <div className="problem-solver">
            <textarea
                value={userSolution}
                onChange={(e) => setUserSolution(e.target.value)}
                placeholder="Enter your solution here..."
            />
            <button onClick={handleSubmit}>Submit Solution</button>
            {result && (
                <div className="results">
                    <h3>Test Results:</h3>
                    {result.map((testResult, index) => (
                        <div key={index} className={`test-case ${testResult.passed ? 'passed' : 'failed'}`}>
                            <p>Test Case {index + 1}: {testResult.passed ? 'Passed' : 'Failed'}</p>
                            {!testResult.passed && (
                                <>
                                    <p>Input: {JSON.stringify(testResult.input)}</p>
                                    <p>Expected Output: {JSON.stringify(testResult.expectedOutput)}</p>
                                    <p>Actual Output: {JSON.stringify(testResult.actualOutput)}</p>
                                    {testResult.error && <p>Error: {testResult.error}</p>}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProblemSolver;