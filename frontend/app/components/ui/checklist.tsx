import * as React from 'react';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


interface Task {
  id: number;
  name: string;
  completed: boolean;
  isEditing?: boolean;
}

// progressbar
function CustomProgressBar({ completedTasks, totalTasks }: { completedTasks: number, totalTasks: number }) {
  const progressBlocks = Array.from({ length: totalTasks }, (_, i) => i < completedTasks);

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography variant="body1">Checklist: {completedTasks}/{totalTasks}</Typography>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
        {progressBlocks.map((filled, index) => (
          <div
            key={index}
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: filled ? '#2d2e4f' : '#d3d3d3',
              marginRight: '4px',
              borderRadius: '2px',
            }}
          />
        ))}
      </div>
    </Stack>
  );
}

// checklistcomponent
function ChecklistComponent({ tasks, setTasks }: { tasks: Task[], setTasks: React.Dispatch<React.SetStateAction<Task[]>> }) {
  const [newTask, setNewTask] = React.useState('');
  const completedTasks = tasks.filter(task => task.completed).length;
  
  const handleToggleTask = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks(prevTasks => [
        ...prevTasks,
        { id: tasks.length + 1, name: newTask, completed: false },
      ]);
      setNewTask(''); 
    }
  };

  const handleEditTask = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, isEditing: true } : task
      )
    );
  };

  const handleSaveTask = (id: number, newName: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, name: newName, isEditing: false } : task
      )
    );
  };

  return (
    <Stack spacing={2}>
      {/* checklist progressbar */}
      <CustomProgressBar completedTasks={completedTasks} totalTasks={tasks.length} />

      {/* write a new subtask */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <Checkbox disabled />
        <TextField
          fullWidth
          placeholder="Write a new subtask..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddTask}>Add</Button>
      </Stack>

      {/* checklist */}
      <List>
        {tasks.map(task => (
          <ListItem key={task.id} dense>
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />

            {task.isEditing ? (
              <TextField
                fullWidth
                value={task.name}
                autoFocus
                onChange={(e) => setTasks(prevTasks =>
                  prevTasks.map(t =>
                    t.id === task.id ? { ...t, name: e.target.value } : t
                  )
                )}
                onBlur={() => handleSaveTask(task.id, task.name)} 
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSaveTask(task.id, task.name); 
                  }
                }}
              />
            ) : (
              <>

                <Typography variant="body2" style={{ flexGrow: 1 }}>{task.name}</Typography>
                <IconButton onClick={() => handleEditTask(task.id)}>
                    <CreateIcon fontSize="small" />
                </IconButton>
               </>
            )}
            <IconButton onClick={() => handleDeleteTask(task.id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

// Main Checklist Component with attachment functionality
function Checklist() {
  const [tasks, setTasks] = React.useState([
    { id: 1, name: 'Create wireframes for sign up flow.', completed: true },
    { id: 2, name: 'Create wireframes for sign up flow.', completed: false },
    { id: 3, name: 'Create wireframes for sign up flow.', completed: false },
    { id: 4, name: 'Create wireframes for sign up flow.', completed: true },
    { id: 5, name: 'Create wireframes for sign up flow.', completed: true },
  ]);

  const completedTasks = tasks.filter(task => task.completed).length;


    return (
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '800px', margin: 'auto' }}>
        {/* progressbar */}
        <CustomProgressBar completedTasks={completedTasks} totalTasks={tasks.length} />
  
        {/* checklistcomponent */}
        <ChecklistComponent tasks={tasks} setTasks={setTasks}/>

      </div>
    );
  }
  
  export default Checklist;
