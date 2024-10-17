import React from "react";
import TaskCard from "../ui/taskCard";
import DragAndDropModule from "./DragAndDropModule";

/**
 * Represents a task in the application.
 */
export interface Task {
  id: string; // Unique identifier for the task
  name: string; // Name of the task
  members: Member[]; // List of members assigned to the task
  date: string; // Date associated with the task
  checklist: number; // Number of checklist items
  labelNames: string[]; // Labels associated with the task
  position: number; // Position of the task in the list
}

/**
 * Represents a list of tasks categorized by their status.
 */
export interface TaskList {
  todo: Task[]; // Tasks that are yet to be started
  inProgress: Task[]; // Tasks that are currently being worked on
  completed: Task[]; // Tasks that have been finished
}

/**
 * Represents a member assigned to a task.
 */
export type Member = {
  id: number; // Unique identifier for the member
  name: string; // Name of the member
};

/**
 * Props for the DropTaskContainer component.
 */
interface DropTaskContainerProps {
  tasks: Array<{
    id: string; // Unique identifier for the task
    labelNames: string[]; // Labels associated with the task
    name: string; // Name of the task
    members: Member[]; // List of members assigned to the task
    date: string; // Date associated with the task
    checklist: number; // Number of checklist items
    position: number; // Position of the task in the list
  }>;
  moveTask: (
    id: string, // ID of the task to move
    currentContainer: keyof TaskList, // Current container of the task
    newContainer: keyof TaskList // New container for the task
  ) => void; // Function to move the task
  containerName: keyof TaskList; // Name of the container
}

/**
 * DropTaskContainer component renders a list of tasks within a drag-and-drop interface.
 *
 * This component utilizes the DragAndDropModule to allow users to move tasks between different states
 * (e.g., from "todo" to "inProgress" or "completed").
 *
 * @param {DropTaskContainerProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const DropTaskContainer: React.FC<DropTaskContainerProps> = ({
  tasks,
  moveTask,
  containerName,
}) => {
  return (
    <DragAndDropModule
      moveTask={moveTask}
      containerName={containerName}
      accept="TASK"
    >
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          labelNames={task.labelNames}
          taskName={task.name}
          members={task.members}
          date={new Date(task.date)}
          checklist={task.checklist}
          position={task.position}
          currentContainer={containerName}
        />
      ))}
    </DragAndDropModule>
  );
};

export default DropTaskContainer;
