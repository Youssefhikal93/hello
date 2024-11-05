import React from 'react';

interface MoveTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProject: string;
  setSelectedProject: (project: string) => void;
  selectedList: string;
  setSelectedList: (list: string) => void;
  selectedPosition: number;
  setSelectedPosition: (position: number) => void;
  onMoveTask: () => void;
}

const MoveTaskModal: React.FC<MoveTaskModalProps> = ({
  isOpen,
  onClose,
  selectedProject,
  setSelectedProject,
  selectedList,
  setSelectedList,
  selectedPosition,
  setSelectedPosition,
  onMoveTask,
}) => {
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`} 
      onClick={handleOverlayClick}
      style={{ 
        borderColor: '#000',  
        borderRadius: '40px',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10" ></div>
      <div 
        className="relative bg-white rounded-lg shadow-lg w-96 p-6" 
        onClick={handleModalClick}>
        <div className="mb-4 relative">
          <h2 id="move-task-modal-title" className="text-2xl font-semibold text-center mb-4">
            Move Task
          </h2>
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }} 
            className="absolute right-0 top-0 text-xl font-semibold"
            style={{transform: 'translateY(-50%)', top: '50%',fontSize: '1.5rem' }}
          >
              &times;
            </button>
        </div>

        <div className="mb-4">
          <label htmlFor="project" className="block text-sm font-medium mb-1">
            Project:
          </label>
          <select
            id="project"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            style={{ 
              borderRadius: '20px',
              borderColor: '#2A2D4B', 
              borderWidth: '2px' 
            }}
          >
            <option value="Current Project">Current Project</option>
            <option value="Another Project">Another Project</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="list" className="block text-sm font-medium mb-1">
            List & Position:
          </label>
          
          <select
            id="list"
            value={selectedList}
            onChange={(e) => setSelectedList(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
            style={{ 
              borderRadius: '20px',
              borderColor: '#2A2D4B', 
              borderWidth: '2px' 
            }}
          >
            <option value="to do">to do</option>
            <option value="in progress">in progress</option>
            <option value="completed">completed</option>
          </select>

          <select
            id="Position"
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(parseInt(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
            style={{ 
              borderRadius: '20px',
              borderColor: '#2A2D4B', 
              borderWidth: '2px' 
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="flex justify-end mt-4">
          <button 
            onClick={onMoveTask} 
            className="px-4 py-2 text-white rounded" 
            style={{ 
              backgroundColor: '#2A2D4B',
              borderRadius: '20px',
              borderColor: '#2A2D4B', 
              borderWidth: '2px'
            }}
          >
            Move
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoveTaskModal;