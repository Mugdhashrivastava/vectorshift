import React from 'react';
import { Handle, Position } from 'reactflow';
import '../styles/theme.css';

const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children
}) => {
  return (
    <div className="node-box">
      <div className="node-title">{title}</div>
      <div className="node-content">{children}</div>

      {inputs.map((input, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: input.top || undefined }}
        />
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={index}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: output.top || undefined }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
