import React, { useState } from 'react';
import BaseNode from './BaseNode';

const BooleanNode = ({ id, data }) => {
  const [toggle, setToggle] = useState(data?.value || false);

  return (
   <BaseNode id={id} title="Boolean Node" outputs={[{ id: 'value' }]}>
  <label style={{ display: 'flex' }}>
   <span>{toggle ? 'True' : 'False'}</span>
    <input
      type="checkbox"
      checked={toggle}
      onChange={(e) => setToggle(e.target.checked)}
    />
 
  </label>
</BaseNode>

  );
};

export default BooleanNode;
