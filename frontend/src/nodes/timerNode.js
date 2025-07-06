import React, { useState } from 'react';
import BaseNode from './BaseNode';

const TimerNode = ({ id, data }) => {
  const [seconds, setSeconds] = useState(data?.seconds || 0);

  return (
    <BaseNode
      id={id}
      title="Timer Node"
      inputs={[{ id: 'start' }]}
      outputs={[{ id: 'done' }]}
    >
      <input
        type="number"
        value={seconds}
        min="0"
        onChange={(e) => setSeconds(e.target.value)}
        placeholder="Seconds"
      />
    </BaseNode>
  );
};

export default TimerNode;
