// src\pages\Problems\problems\TwoSum\index.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJar, faCoins, faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

const AnimationComponent = () => {
    const [nums, setNums] = useState([]);
    const [target, setTarget] = useState(0);
    const [bruteForceSteps, setBruteForceSteps] = useState([]);
    const [efficientSteps, setEfficientSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(1000);
    const [userInput, setUserInput] = useState({ nums: '', target: '' });

    useEffect(() => {
        generateNewProblem();
    }, []);

    useEffect(() => {
        let timer;
        if (isPlaying && currentStep < Math.max(bruteForceSteps.length, efficientSteps.length) - 1) {
            timer = setTimeout(() => {
                setCurrentStep(prev => prev + 1);
            }, speed);
        } else if (currentStep === Math.max(bruteForceSteps.length, efficientSteps.length) - 1) {
            setIsPlaying(false);
        }
        return () => clearTimeout(timer);
    }, [isPlaying, currentStep, bruteForceSteps, efficientSteps, speed]);

    const generateNewProblem = () => {
        const { nums: newNums, target: newTarget } = TwoSum.generateRandomProblem();
        setNums(newNums);
        setTarget(newTarget);
        const { bruteForceSteps: newBruteForceSteps, efficientSteps: newEfficientSteps } = TwoSum.solveTwoSum(newNums, newTarget);
        setBruteForceSteps(newBruteForceSteps);
        setEfficientSteps(newEfficientSteps);
        setCurrentStep(0);
        setIsPlaying(false);
    };

    const handleUserInput = () => {
        try {
            const newNums = JSON.parse(userInput.nums);
            const newTarget = parseInt(userInput.target);
            if (Array.isArray(newNums) && !isNaN(newTarget)) {
                setNums(newNums);
                setTarget(newTarget);
                const { bruteForceSteps: newBruteForceSteps, efficientSteps: newEfficientSteps } = TwoSum.solveTwoSum(newNums, newTarget);
                setBruteForceSteps(newBruteForceSteps);
                setEfficientSteps(newEfficientSteps);
                setCurrentStep(0);
                setIsPlaying(false);
            } else {
                alert('Invalid input. Please enter a valid array and target.');
            }
        } catch (error) {
            alert('Invalid input. Please enter a valid JSON array for nums.');
        }
    };

    const renderJars = (indices) => {
        return nums.map((num, index) => (
            <div key={index} className={`jar ${indices.includes(index) ? 'highlighted' : ''}`}>
                <FontAwesomeIcon icon={faJar} className="jar-icon" />
                <div className="jar-value">{num}</div>
            </div>
        ));
    };

    return (
        <div className="two-sum-animation">
            <h3>Target Sum: <FontAwesomeIcon icon={faCoins} /> {target}</h3>
            <div className="controls">
                <button className="control-btn" onClick={() => setIsPlaying(!isPlaying)}>
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} /> {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button className="control-btn" onClick={() => { setCurrentStep(0); setIsPlaying(false); }}>
                    <FontAwesomeIcon icon={faRedo} /> Reset
                </button>
                <button className="control-btn" onClick={generateNewProblem}>Generate New Problem</button>
            </div>
            <div className="speed-control">
                <label>Animation Speed: </label>
                <input
                    type="range"
                    min="200"
                    max="2000"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                />
            </div>
            <h4>Custom User Input</h4>
            <div className="user-input">
                <input
                    type="text"
                    placeholder="Enter nums (e.g., [2,7,11,15])"
                    value={userInput.nums}
                    onChange={(e) => setUserInput(prev => ({ ...prev, nums: e.target.value }))}
                />
                <input
                    type="number"
                    placeholder="Enter target"
                    value={userInput.target}
                    onChange={(e) => setUserInput(prev => ({ ...prev, target: e.target.value }))}
                />
                <button onClick={handleUserInput}>Set Custom Problem</button>
            </div>
            <div className="methods">
                <div className="brute-force">
                    <h4>Brute Force Method</h4>
                    <div className="jars">
                        {renderJars(bruteForceSteps[currentStep]?.indices || [])}
                    </div>
                    <div className="step-description">
                        {bruteForceSteps[currentStep]?.description || 'Solution found.'}
                    </div>
                </div>
                <div className="efficient">
                    <h4>Efficient Method</h4>
                    <div className="jars">
                        {renderJars(efficientSteps[currentStep]?.indices || [])}
                    </div>
                    <div className="step-description">
                        {efficientSteps[currentStep]?.description || 'Solution found.'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const TwoSum = {
    id: 'two-sum',
    title: 'Two Sum',
    description: `
    <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>
    <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
    <p>You can return the answer in any order.</p>
    <h3>Example:</h3>
    <pre>
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    </pre>
  `,
    starterCode: `function twoSum(nums, target) {
  // Your code here
}`,
    testCases: [
        { input: [[2, 7, 11, 15], 9], output: [0, 1] },
        { input: [[3, 2, 4], 6], output: [1, 2] },
        { input: [[3, 3], 6], output: [0, 1] },
    ],
    generateRandomProblem: () => {
        const length = Math.floor(Math.random() * 5) + 4; // 4 to 8 elements
        const nums = Array.from({ length }, () => Math.floor(Math.random() * 20) + 1);
        const index1 = Math.floor(Math.random() * length);
        let index2;
        do {
            index2 = Math.floor(Math.random() * length);
        } while (index2 === index1);
        const target = nums[index1] + nums[index2];
        return { nums, target };
    },
    solveTwoSum: (nums, target) => {
        const bruteForceSteps = [];
        const efficientSteps = [];
        const map = new Map();

        // Brute Force
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                bruteForceSteps.push({
                    indices: [i, j],
                    description: nums[i] + nums[j] === target ? `Found solution: ${nums[i]} + ${nums[j]} = ${target}` : `Checking: ${nums[i]} + ${nums[j]} = ${target}`,
                    solution: nums[i] + nums[j] === target
                });
                if (nums[i] + nums[j] === target) {
                    break;
                }
            }
            if (bruteForceSteps[bruteForceSteps.length - 1].solution) {
                break;
            }
        }

        // Efficient Method
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (map.has(complement)) {
                efficientSteps.push({
                    indices: [map.get(complement), i],
                    description: `Found complement ${complement} at index ${map.get(complement)}. Solution: [${map.get(complement)}, ${i}]`,
                    solution: true
                });
                break;
            }
            efficientSteps.push({
                indices: [i],
                description: `Looking for complement: ${complement}`,
                solution: false
            });
            map.set(nums[i], i);
        }

        return { bruteForceSteps, efficientSteps };
    },
    renderAnimation: () => <AnimationComponent />,
};