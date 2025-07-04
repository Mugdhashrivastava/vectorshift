import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import '../styles/theme.css';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  // ✅ Update variables on text change
  useEffect(() => {
    const matches = [...currText.matchAll(/\{\{\s*(\w+)\s*\}\}/g)];
    const vars = matches.map(match => match[1]);
    setVariables(vars);
  }, [currText]);

  // ✅ Auto-resize height
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  return (
    <div className="node-box">
      <div className="node-title">💬 Text</div>
      
      {/* 🧠 Auto-growing textarea */}
      <textarea
        ref={textAreaRef}
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        className="textarea-node"
        placeholder="Type text using {{variable}}"
        style={{
          width: '100%',
          borderRadius: '6px',
          padding: '8px',
          resize: 'none',
          fontFamily: 'inherit',
          border: '1px solid #ddd'
        }}
      />

      {/* 🔌 Dynamic Handles for Variables */}
      {variables.map((v, i) => (
        <Handle
          key={v}
          type="target"
          position={Position.Left}
          id={`${id}-${v}`}
          style={{
            top: `${40 + i * 20}px`,
            background: '#cddafd'
          }}
        />
      ))}

      {/* 📤 Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ top: '50%', background: '#cddafd' }}
      />
    </div>
  );
};
