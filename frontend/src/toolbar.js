import { DraggableNode } from "./draggableNode";
import "./styles/theme.css"; // Make sure this import is added

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">
      <DraggableNode type="customInput" label="📥 Input" />
      <DraggableNode type="llm" label="🧠 LLM" />
      <DraggableNode type="customOutput" label="📤 Output" />
      <DraggableNode type="text" label="💬 Text" />
      <DraggableNode type="date" label="📅 Date" />
      <DraggableNode type="image" label="🖼️ Image" />
      <DraggableNode type="math" label="➕ Math" />
      <DraggableNode type="boolean" label="🔘 Boolean" />
      <DraggableNode type="timer" label="⏲️ Timer" />
    </div>
  );
};
