import React, { useState } from 'react';

interface CreateEditLabelProps {
  existingLabel: { name: string; color: string }| null;
  onSave: (label: { name: string; color: string }) => void;
  onClose: () => void;
}

const CreateEditLabel: React.FC<CreateEditLabelProps> = ({ existingLabel,onSave, onClose }) => {
  const [labelName, setLabelName] = useState(existingLabel ? existingLabel.name : '');
  const [labelColor, setLabelColor] = useState(existingLabel ? existingLabel.color : '');

  const handleSave = () => {
    if (labelName && labelColor) {
      onSave({ name: labelName, color: labelColor });
      onClose();
    }
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96"
      style={{ 
        borderColor: '#000',  
        borderRadius: '20px',
      }}
    >
      <div className=" mb-4 relative">
        <h3 className="text-2xl font-semibold text-center">{existingLabel ? 'Edit label' : 'Create label'}</h3>
        <button 
          onClick={onClose} 
          className="absolute right-0 top-0 text-gray-500 hover:text-gray-700"
          style={{transform: 'translateY(-50%)', top: '50%',fontSize: '1.5rem' }}
        >
          &times;
        </button>
      </div>
      <div className="w-full h-10 mb-4 rounded" style={{ backgroundColor: labelColor || '#e5e7eb' }}></div>
      <label className="block mb-2 font-medium">Label name: <span className="text-gray-500">(optional)</span></label>
      <input
        type="text"
        placeholder="e.g. UX/UI"
        value={labelName}
        onChange={(e) => setLabelName(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        style={{ 
          borderRadius: '20px',
          borderColor: '#2A2D4B', 
          borderWidth: '2px' 
        }}
      />
      <div className="mb-4">
        <label className="block mb-2 font-medium">Select a color</label>
        <div className="grid grid-cols-6 gap-2">
        {['#0C52C2', '#21667D', '#22694B', '#49671E', '#4DC693', 
          '#5497F5', '#55636F', '#5A4AAC', '#68BCD8', '#8795A5', 
          '#8F3A6F', '#8FC047', '#998AE7', '#9E460B', '#A72C23', 
          '#AC9D1A', '#B7C9DF', '#BAF3D4', '#C6EDFB', '#C7BDFB', 
          '#CCE0FF', '#D3F1A7', '#DE6FB4', '#E8D952', '#EE6C63', 
          '#F39C5E', '#FDC197', '#FDD0EC', '#FFD5D2', '#FFF59E']
        .map((color) => (
          <div
          key={color}
          className={`w-8 h-8 rounded-full cursor-pointer border ${labelColor === color ? 'ring-2 ring-black' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => setLabelColor(color)}
          />
        ))}
      </div>
    </div>
      <button
        onClick={() => setLabelColor('')}
        className="w-full  gap-2 mb-4 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
        style={{ 
          borderRadius: '20px',
          borderColor: '#2A2D4B', 
          borderWidth: '2px' 
        }}
      >
        ✕ Remove color
      </button>
      <div className="flex gap-4">
        <button 
          onClick={onClose} className="bg-white-300 px-4 py-2 rounded hover:bg-gray-400"
          style={{ 
            borderRadius: '20px',
            borderColor: '#2A2D4B', 
            borderWidth: '2px' 
          }}
        >
          Delete
        </button>
        <button 
          onClick={handleSave} className=" text-white px-4 py-2 rounded hover:bg-gray-400"
          style={{ 
            backgroundColor: '#2A2D4B',
            borderRadius: '20px',
            borderColor: '#2A2D4B', 
            borderWidth: '2px' 
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};


export default CreateEditLabel;