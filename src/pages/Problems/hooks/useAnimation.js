// src\pages\Problems\hooks\useAnimation.js
import { useState, useEffect } from 'react';

export const useAnimation = (problem) => {
    const [animationState, setAnimationState] = useState({
        currentStep: 0,
        isPlaying: false,
        speed: 500,
        ...problem.initialAnimationState,
    });

    useEffect(() => {
        let timer;
        if (animationState.isPlaying && problem && problem.animationSteps && animationState.currentStep < problem.animationSteps.length - 1) {
            timer = setTimeout(() => {
                setAnimationState(prev => ({
                    ...prev,
                    currentStep: prev.currentStep + 1,
                    ...problem.animationSteps[prev.currentStep + 1],
                }));
            }, animationState.speed);
        } else if (problem && problem.animationSteps && animationState.currentStep === problem.animationSteps.length - 1) {
            setAnimationState(prev => ({ ...prev, isPlaying: false }));
        }
        return () => clearTimeout(timer);
    }, [animationState, problem]);

    const controls = {
        start: () => setAnimationState(prev => ({ ...prev, isPlaying: true })),
        pause: () => setAnimationState(prev => ({ ...prev, isPlaying: false })),
        reset: () => setAnimationState(prev => ({ ...prev, currentStep: 0, isPlaying: false, ...problem.initialAnimationState })),
        setSpeed: (speed) => setAnimationState(prev => ({ ...prev, speed })),
    };

    return { animationState, controls };
};