import React, { useState } from 'react';
import LabelSelector from './LabelSelector';
import MoveTaskModal from './MoveTaskModal';
import Checklist from './checklist';
import PrioritySelectorDialog from './PrioritySelectorDialog';
import { Box, Typography, IconButton, Dialog, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import AttachFileIcon from '@mui/icons-material/AttachFile';


interface TaskCardProps {
  labels?: { name: string; color: string }[];
  onEditLabels?: () => void;
  taskName?: string;
  onClose?: () => void;
  isOpen?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ 
  labels: initialLabels= [], 
  onEditLabels= () => {}, 
  taskName="My very first task", 
  onClose= () => {},
  isOpen= true 
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  const [isMoveTaskModalOpen, setMoveTaskModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('Current Project');
  const [selectedList, setSelectedList] = useState('to do');
  const [selectedPosition, setSelectedPosition] = useState(1);
  const [selectedPriority, setSelectedPriority] = useState<'Critical' | 'High' | 'Medium' | 'Low' | 'None'>('None');
  const [isPrioritySelectorOpen, setPrioritySelectorOpen] = useState(false);

  const [isLabelSelectorOpen, setIsLabelSelectorOpen] = useState(false);
  const [labels, setLabels] = useState(initialLabels ?? []);

  const openLabelSelector = () => setIsLabelSelectorOpen(true); 
  const closeLabelSelector = () => setIsLabelSelectorOpen(false);
  const handleLabelSave = (selectedLabels: { name: string; color: string }[]) => {
    setLabels(selectedLabels); 
    onEditLabels(); 
    closeLabelSelector(); 
  };

  const [isChecklistOpen, setChecklistOpen] = useState(false); 
  const openChecklistModal = () => setChecklistOpen(true); 
  const closeChecklistModal = () => setChecklistOpen(false);


  const priorityColors: { [key: string]: string } = {
    Critical: '#EC5541',
    High: '#FA9C58',
    Medium: '#FEFE77',
    Low: '#77FD76',
    None: '#cccccc',
  };

  const openPrioritySelector = () => {
    setPrioritySelectorOpen(true);
  };

  const closePrioritySelector = () => {
    setPrioritySelectorOpen(false);
  };

  const handlePrioritySelect = (priority: 'Critical' | 'High' | 'Medium' | 'Low' | 'None') => {
    setSelectedPriority(priority);
    setPrioritySelectorOpen(false);
  };

  const openMoveTaskModal = () => {
    setMoveTaskModalOpen(true);
  };

  const closeMoveTaskModal = () => {
    setMoveTaskModalOpen(false);
  };

  const handleMoveTask = () => {
    setMoveTaskModalOpen(false);
  };

  const handleClose = () => {
    setIsVisible(false); 
    onClose(); 
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
    <Dialog 
      open={isOpen} 
      onClose={onClose} 
      fullWidth maxWidth={false}
      PaperProps={{
        style: {
          width: '500px',     
          maxWidth: '90vw',
          borderRadius: '30px', 
        },
      }}
    >
        <Box className="task-card" sx={{ padding: '16px', borderRadius: '8px', marginBottom: '16px', position: 'relative' }}>
          <div 
            className="task-header"
            style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }}
          >
          <div 
            className="priority-bar" 
            onClick={openPrioritySelector} 
            style={{ 
            backgroundColor: priorityColors[selectedPriority], 
            color: '#000', 
            padding: '8px', 
            borderRadius: '40px',
            textAlign: 'center',
            cursor: 'pointer',
            flexGrow: 1,
          }}
          >
            {selectedPriority === 'None' ? 'Set Priority' : selectedPriority}
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton style={{ color: '#000' }}>
              <NotificationsIcon />
            </IconButton>
            <IconButton style={{ color: '#000' }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>

    <div className="add-labels-button" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px' }}>
      <div className="labels" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        {labels.map((label, index) => (
          <span 
            key={index} 
            style={{ 
              backgroundColor: label.color, 
              color: '#fff', 
              padding: '6px 12px', 
              borderRadius: '12px', 
              marginRight: '4px',
              marginTop: '8px',
              display: 'inline-block' 
            }}
          >
            {label.name}
          </span>
        ))}
        <IconButton 
          style={{ 
            color: '#555', 
            backgroundColor: '#fff', 
            border: '2px solid #555', 
            borderRadius: '50%',
            padding: '6px 6px',
            
          }} 
          onClick={openLabelSelector}>
          <AddIcon fontSize="small"/> 
        </IconButton>
      </div>
    </div>


      <Typography variant="h6" style={{ fontWeight: 'bold',}}>{taskName}</Typography>
      <Typography variant="body1">
        in list{' '}
        <span onClick={openMoveTaskModal} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
          {selectedList}
        </span>{' '}
        <AttachFileIcon style={{ verticalAlign: 'middle', marginLeft: '4px', fontSize: 'small' }} />
        {selectedPosition}
      </Typography>

      
      <div className="mb-4" style={{ marginTop: '16px' }}>
        <h3 className="font-bold">Add assignees</h3>
        <input 
          type="text" 
          placeholder="Assign this task to someone..." 
          className="w-full p-2 rounded border border-gray-300"
          style={{ 
            borderRadius: '25px',
            borderColor: '#000', 
            borderWidth: '2px'
          }} 
        />
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Date</h3>
        <input 
          type="text" 
          placeholder="Set a deadline and/or milestones..." 
          className="w-full p-2 rounded border border-gray-300"
          style={{ 
            borderRadius: '25px',
            borderColor: '#000', 
            borderWidth: '2px'
          }} 
        />
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Checklist</h3>
        <input 
          type="text" 
          placeholder="Add subtasks for better organization..." 
          className="w-full p-2 rounded border border-gray-300" 
          style={{ 
            borderRadius: '25px',
            borderColor: '#000', 
            borderWidth: '2px' 
          }}
          onClick={openChecklistModal}
        />
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Description</h3>
        <input 
          type="text" 
          placeholder="Describe your task..." 
          className="w-full p-2 rounded border border-gray-300" 
          style={{ 
            borderRadius: '25px',
            borderColor: '#000', 
            borderWidth: '2px' 
          }}
        />
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Messages</h3>
        <input 
          type="text" 
          placeholder="Write a message..." 
          className="w-full p-2 rounded border border-gray-300" 
          style={{ 
            borderRadius: '25px',
            borderColor: '#000', 
            borderWidth: '2px' 
          }}
        />
      </div>
    
    {/* Move Task Modal component */}
      <MoveTaskModal
          isOpen={isMoveTaskModalOpen}
          onClose={closeMoveTaskModal}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          selectedList={selectedList}
          setSelectedList={setSelectedList}
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          onMoveTask={handleMoveTask}
        />

    {/* Priority Selector Dialog */}
      {isPrioritySelectorOpen && (
        <PrioritySelectorDialog
          open={isPrioritySelectorOpen}
          onClose={closePrioritySelector}
          onPrioritySelect={handlePrioritySelect}
        />
      )}

    {/* Label Selector Modal */}
      {isLabelSelectorOpen && (
        <LabelSelector
          existingLabels={labels}
          onSave={handleLabelSave}
          onClose={closeLabelSelector}
        />
      )}

    {/* Checklist Modal */}
    <Dialog open={isChecklistOpen} onClose={closeChecklistModal} >
      <Checklist/>
    </Dialog>

    </Box>
    </Dialog>
    </>
  );
};

export default TaskCard;