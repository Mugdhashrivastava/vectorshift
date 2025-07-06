import React, { useEffect, useRef, useState } from 'react';
import BaseNode from './BaseNode';

const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [dynamicInputs, setDynamicInputs] = useState([]);
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setCurrText(value);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    const matches = [...currText.matchAll(/{{\s*(\w+)\s*}}/g)].map(match => match[1]);
    const uniqueInputs = [...new Set(matches)];

    const inputs = uniqueInputs.map((input, index) => ({
      id: input,
      top: `${(index + 1) * 30}px`,
    }));

    setDynamicInputs(inputs);
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Text Node"
      inputs={dynamicInputs}
      outputs={[{ id: 'output' }]}
    >
      <textarea
        ref={textareaRef}
        value={currText}
        onChange={handleTextChange}
        style={{
          width: '100%',
        }}
        placeholder="Type something like {{input}}..."
      />
    </BaseNode>
  );
};

export default TextNode;
