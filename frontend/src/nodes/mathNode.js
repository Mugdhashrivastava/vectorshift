import React, { useState } from 'react';
import BaseNode from './BaseNode';

const MathNode = ({ id, data }) => {
  const [a, setA] = useState(data?.a || '');
  const [b, setB] = useState(data?.b || '');
  const [op, setOp] = useState(data?.op || '+');

  return (
    <BaseNode
      id={id}
      title="Math Node"
      inputs={[{ id: 'a' }, { id: 'b' }]}
      outputs={[{ id: 'result' }]}
    >
      <input type="number" placeholder="A" value={a} onChange={(e) => setA(e.target.value)} />
      <select value={op} onChange={(e) => setOp(e.target.value)}>
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <input type="number" placeholder="B" value={b} onChange={(e) => setB(e.target.value)} />
    </BaseNode>
  );
};

export default MathNode;
