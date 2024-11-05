import React, { useState } from 'react';
import CreateEditLabel from './CreateEditLabel';

interface LabelSelectorProps {
  existingLabels: { name: string; color: string }[];
  onSave: (labels: { name: string; color: string }[]) => void;
  onClose: () => void;
}

const LabelSelector: React.FC<LabelSelectorProps> = ({ existingLabels, onSave, onClose }) => {
  const [labels, setLabels] = useState<{ name: string; color: string }[]>(JSON.parse(JSON.stringify(existingLabels)));
  const [selectedLabels, setSelectedLabels] = useState<{ name: string; color: string }[]>(JSON.parse(JSON.stringify(existingLabels)));
  const [showCreateLabel, setShowCreateLabel] = useState(false);
  const [editLabel, setEditLabel] = useState<{ name: string; color: string } | null>(null);

  const handleCreateLabel = (newLabel: { name: string; color: string }) => {
    let updatedLabels;
    if (editLabel) {
      // Editing an existing label
      updatedLabels = labels.map(label => 
        label.name === editLabel.name ? newLabel : label
      );
    } else {
      // Creating a new label
      updatedLabels = [...labels, newLabel];
    }
    setLabels(updatedLabels);
    onSave(updatedLabels); // Update parent component with new label immediately
    setShowCreateLabel(false); // Hide the create label modal
    setEditLabel(null); // Reset edit label state
  };


  const handleSave = () => {
    onSave(selectedLabels); 
    onClose();      
  };

  const toggleLabelSelection = (label: { name: string; color: string }) => {
    if (selectedLabels.some((item) => item.name === label.name)) {
      setSelectedLabels(selectedLabels.filter((item) => item.name !== label.name));
    } else {
      setSelectedLabels([...selectedLabels, label]);
    }
  };



    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-80" 
        style={{ 
        borderColor: '#000', 
        borderRadius: '20px',
        }}
      >
        
        <div className=" mb-4 relative" >
          <h3 className="text-2xl font-semibold text-center" >Labels</h3>
          <button 
            onClick={onClose} 
            className="absolute right-0 top-0 text-gray-500 hover:text-gray-700"
            style={{transform: 'translateY(-50%)', top: '50%',fontSize: '1.5rem' }}
          >
            &times;
          </button>
        </div>
        <input
          type="text"
          placeholder="Search labels..."
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          style={{ 
            borderRadius: '25px',
            borderColor: '#aaa', 
            borderWidth: '2px' 
          }}
        />
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Labels</h3>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          {labels.map((label, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={selectedLabels.some((item) => item.name === label.name)}
                onChange={() => toggleLabelSelection(label)}
                style={{ 
                  backgroundColor: label.color,
                  borderRadius: '30px',
                }}
              />
              <div className="flex-1 flex items-center gap-2">
                <span 
                className="flex-1 p-2 rounded" 
                style={{ 
                  backgroundColor: label.color,
                  borderRadius: '15px',
                }}>
                  {label.name}
                </span>
                <button 
                  onClick={() => { setEditLabel(label); setShowCreateLabel(true); }} 
                  className="text-gray-500 hover:text-gray-700"
                  
                >

                  <img
                    src="/edit-icon.svg"
                    alt="Edit"
                    className="w-10 h-10"
                  />
                </button>
              </div>
            </div>
          ))}
          </div>
      <button
        onClick={() => setShowCreateLabel(true)}
        className="w-full bg-white-500 text-black py-2 rounded mb-4 hover:bg-white-600"
        style={{ 
          borderRadius: '20px',
          borderColor: '#2A2D4B', 
          borderWidth: '2px' 
        }}
      >
        Create a new label
      </button>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="w-1/3  text-white py-2 rounded hover:bg-green-600"
          style={{ 
            backgroundColor: '#2A2D4B', 
            color: '#fff',
            borderRadius: '20px',
          }}
        >
          Save
        </button>
      </div>

      {showCreateLabel && <CreateEditLabel existingLabel={editLabel} onSave={handleCreateLabel} onClose={() => { setShowCreateLabel(false); setEditLabel(null); }} />}
    </div>
  );
};
    


export default LabelSelector;