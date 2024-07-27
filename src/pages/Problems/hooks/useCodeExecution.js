// src\pages\Problems\hooks\useCodeExecution.js
import { useState, useEffect } from 'react';

export const useCodeExecution = (problem) => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [output, setOutput] = useState('');
    const [consoleOutput, setConsoleOutput] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (problem) {
            setCode(problem.starterCode);
        }
    }, [problem]);

    const executeCode = async () => {
        setIsLoading(true);
        setConsoleOutput([]);
        try {
            const response = await fetch('http://localhost:3001/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ language, code }),
            });
            const data = await response.json();
            setOutput(data.output);
            setConsoleOutput(data.consoleOutput || []);
        } catch (error) {
            setOutput(error.message || 'An error occurred');
            setConsoleOutput([{ type: 'error', content: error.message || 'An error occurred' }]);
        }
        setIsLoading(false);
    };

    return { code, setCode, language, setLanguage, output, consoleOutput, isLoading, executeCode };
};