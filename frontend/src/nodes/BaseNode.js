// BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({
  id,
  title,
  width = 200,
  height = 80,
  borderColor = 'black',
  inputs = [],
  outputs = [],
  children
}) => {
  return (
    <div style={{ width, height, border: `1px solid ${borderColor}`, padding: '4px', borderRadius: '4px' }}>
      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: input.top || undefined }}
        />
      ))}

      {/* Title */}
      <div>
        <strong>{title}</strong>
      </div>

      {/* Content */}
      <div>
        {children}
      </div>

      {/* Output Handles */}
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
