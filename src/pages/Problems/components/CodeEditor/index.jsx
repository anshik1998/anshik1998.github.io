// src/pages/LeetCode/components/CodeEditor/index.jsx
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { useCodeExecution } from '../../hooks/useCodeExecution';

import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/ext-beautify';
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-tomorrow";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/snippets/python';
import 'ace-builds/src-noconflict/snippets/java';
import 'ace-builds/src-noconflict/snippets/c_cpp';
import './index.css';

const CodeEditor = forwardRef(({ problem }, ref) => {
    const { code, setCode, language, setLanguage, output, consoleOutput, isLoading, executeCode } = useCodeExecution(problem);
    const [editorHeight, setEditorHeight] = useState('70%');
    const editorContainerRef = useRef(null);
    const outputContainerRef = useRef(null);

    useImperativeHandle(ref, () => ({
        adjustHeight: (newHeight) => {
            setEditorHeight(newHeight);
        }
    }));

    const handleVerticalResize = (e) => {
        if (editorContainerRef.current && outputContainerRef.current) {
            const containerHeight = editorContainerRef.current.parentElement.offsetHeight;
            const newEditorHeight = (e.clientY / containerHeight) * 100;
            setEditorHeight(`${newEditorHeight}%`);
        }
    };

    if (!problem) return <div className="problem-selection">Please select a problem.</div>;

    return (
        <div className="code-editor">
            <div className="editor-controls">
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="c">C</option>
                    <option value="cpp">C++</option>
                </select>
                <button onClick={executeCode} disabled={isLoading}>
                    {isLoading ? 'Running...' : 'Run Code'}
                </button>
            </div>
            <div ref={editorContainerRef} className="editor-container" style={{ height: editorHeight }}>
                <AceEditor
                    placeholder="Placeholder Text"
                    mode={(language === 'c' || language === 'cpp') ? 'c_cpp' : language}
                    name={language}
                    theme="tomorrow"
                    value={code}
                    readOnly={false}
                    fontSize={16}
                    width="100%"
                    height="45vh"
                    lineHeight={24}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    // editorProps={{ $blockScrolling: true }}
                    onChange={(newValue) => setCode(newValue)}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 2,
                        useWorker: false
                    }}
                />
            </div>
            <div className="vertical-resizer" onMouseDown={(e) => {
                document.addEventListener('mousemove', handleVerticalResize);
                document.addEventListener('mouseup', () => {
                    document.removeEventListener('mousemove', handleVerticalResize);
                });
            }}></div>
            <div ref={outputContainerRef} className="output-container">
                <div className="output">
                    <h3>Output:</h3>
                    <pre>{output}</pre>
                </div>
                <div className="console-output">
                    <h3>Console Output:</h3>
                    {consoleOutput.map((item, index) => (
                        <div key={index} className={`console-item ${item.type}`}>
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default CodeEditor;