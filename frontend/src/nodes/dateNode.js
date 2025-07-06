import React, { useState } from 'react';
import BaseNode from './BaseNode';

const DateNode = ({ id, data }) => {
  const [date, setDate] = useState(data?.date || '');

  return (
    <BaseNode id={id} title="Date Node" outputs={[{ id: 'date' }]}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </BaseNode>
  );
};

export default DateNode;
