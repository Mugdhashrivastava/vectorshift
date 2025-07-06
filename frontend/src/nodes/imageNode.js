import React, { useState } from 'react';
import BaseNode from './BaseNode';

const ImageNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || '');

  return (
    <BaseNode id={id} title="Image Node" outputs={[{ id: 'image' }]}>
      <input
        type="text"
        placeholder="Enter image URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      {url && (
        <img src={url} alt="preview" style={{ width: '100%', marginTop: '5px' }} />
      )}
    </BaseNode>
  );
};

export default ImageNode;
