import BaseNode from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      borderColor="purple"
      inputs={[
        { id: 'system', top: `${100 / 3}%` },
        { id: 'prompt', top: `${200 / 3}%` }
      ]}
      outputs={[{ id: 'response' }]}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
};
