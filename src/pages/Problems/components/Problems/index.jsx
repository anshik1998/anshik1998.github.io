// src\pages\Problems\components\Problems\index.jsx
import React, { useState, useRef } from 'react';
import ProblemSelector from '../ProblemSelector';
import ProblemDescription from '../ProblemDescription';
import AnimationDemo from '../AnimationDemo';
import CodeEditor from '../CodeEditor';
import { useProblem } from '../../hooks/useProblem';
import './index.css';
import SidebarPanel from './../../../Portfolio/components/Sidebar/index.jsx';


const Problems = () => {
    const [activeTab, setActiveTab] = useState('code');
    const { currentProblem, selectProblem } = useProblem();
    const leftPanelRef = useRef(null);
    const rightPanelRef = useRef(null);
    const codeEditorRef = useRef(null);

    const handleHorizontalResize = (e) => {
        if (leftPanelRef.current && rightPanelRef.current) {
            const newWidth = e.clientX;
            leftPanelRef.current.style.width = `${newWidth}px`;
            rightPanelRef.current.style.width = `calc(100% - ${newWidth}px)`;
        }
    };

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleSidebarVisibility = (isVisible) => {
        setIsSidebarVisible(isVisible)
    }

    return (
        <div className={`leetcode-container ${isSidebarVisible ? 'sidebar-visible' : ''}`}>
            <SidebarPanel onVisibilityChange={handleSidebarVisibility} />
            <div ref={leftPanelRef} className="left-panel">
                <ProblemSelector onSelectProblem={selectProblem} />
                <ProblemDescription problem={currentProblem} />
            </div>
            <div className="resizer" onMouseDown={(e) => {
                document.addEventListener('mousemove', handleHorizontalResize);
                document.addEventListener('mouseup', () => {
                    document.removeEventListener('mousemove', handleHorizontalResize);
                });
            }}></div>
            <div ref={rightPanelRef} className="right-panel">
                <div className="tabs">
                    <button className={`tab ${activeTab === 'code' ? 'active' : ''}`} onClick={() => setActiveTab('code')}>Code</button>
                    <button className={`tab ${activeTab === 'animation' ? 'active' : ''}`} onClick={() => setActiveTab('animation')}>Animation</button>
                </div>
                <div className="tab-content">
                    {activeTab === 'code' && <CodeEditor ref={codeEditorRef} problem={currentProblem} />}
                    {activeTab === 'animation' && currentProblem && <AnimationDemo problem={currentProblem} />}
                </div>
            </div>
        </div>
    );
};

export default Problems;