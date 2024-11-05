import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Typography, Box  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface PrioritySelectorDialogProps {
  open: boolean;
  onClose: () => void;
  onPrioritySelect: (priority: 'Critical' | 'High' | 'Medium' | 'Low' | 'None') => void;
}

const PrioritySelectorDialog: React.FC<PrioritySelectorDialogProps> = ({ open, onClose, onPrioritySelect }) => {

  const priorityColors: { [key: string]: string } = {
    Critical: '#EC5541',
    High: '#FA9C58',
    Medium: '#FEFE77',
    Low: '#77FD76',
    None: '#cccccc',
  };

  return (
    <Dialog open={open} onClose={onClose} >
       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '1px'}}>
      <DialogTitle>
        Priority
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ position: 'absolute', right: '2px', top: '11px', color: '#000' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      </Box>

      <DialogContent>
        <Typography>Select a priority:</Typography>
        <Button  
          style={{ 
            backgroundColor: priorityColors['Critical'], 
            color: '#000',
            fontWeight: 'bold',
            textTransform: 'capitalize', 
            marginTop: '8px', 
            borderRadius: '40px',
            width: '100%',
            margin: '8px auto',
            display: 'block' 
          }} 
          onClick={() => onPrioritySelect('Critical')}
        >
          Critical
        </Button>
        <Button  
          style={{ 
            backgroundColor: priorityColors['High'], 
            color: '#000',
            fontWeight: 'bold',
            textTransform: 'capitalize',  
            marginTop: '8px', 
            borderRadius: '40px',
            width: '100%',
            margin: '8px auto',
            display: 'block'
          }} 
          onClick={() => onPrioritySelect('High')}
        >
          High
        </Button>
        <Button 
          style={{ 
            backgroundColor: priorityColors['Medium'], 
            color: '#000',
            fontWeight: 'bold',
            textTransform: 'capitalize', 
            marginTop: '8px', 
            borderRadius: '40px',
            width: '100%',
            margin: '8px auto',
            display: 'block'
          }} 
          onClick={() => onPrioritySelect('Medium')}
        >
          Medium
        </Button>
        <Button 
          style={{ 
            backgroundColor: priorityColors['Low'], 
            color: '#000',
            fontWeight: 'bold',
            textTransform: 'capitalize',  
            marginTop: '8px', 
            borderRadius: '40px',
            width: '100%',
            margin: '8px auto',
            display: 'block'
          }} 
          onClick={() => onPrioritySelect('Low')}
        >
          Low
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onPrioritySelect('None')} style={{ color: '#000' }}>Clear</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrioritySelectorDialog;