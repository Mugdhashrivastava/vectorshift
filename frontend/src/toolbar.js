import { DraggableNode } from './draggableNode';
import './styles/theme.css'; // Make sure this import is added

export const PipelineToolbar = () => {
    return (
        <div className="toolbar">
            <DraggableNode type='customInput' label='📥 Input' />
            <DraggableNode type='llm' label='🧠 LLM' />
            <DraggableNode type='customOutput' label='📤 Output' />
            <DraggableNode type='text' label='💬 Text' />
        </div>
    );
};
