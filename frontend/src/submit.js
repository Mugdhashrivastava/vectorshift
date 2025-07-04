import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore(state => state.nodes);
  const edges = useStore(state => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nodes, edges })
      });

      const result = await response.json();
      alert(`🎉 Pipeline Info:
- Nodes: ${result.num_nodes}
- Edges: ${result.num_edges}
- Is DAG: ${result.is_dag ? '✅ Yes' : '❌ No'}`);
    } catch (error) {
      alert('❌ Error submitting pipeline. Is the backend running?');
      console.error(error);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button className="submit-button" onClick={handleSubmit}>
        🚀 Submit
      </button>
    </div>
  );
};
