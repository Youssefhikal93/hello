import React from "react";
import TaskCard from "../ui/taskCard";
import DragAndDropModule from "./DragAndDropModule";

export interface Task {
  id: string;
  name: string;
  members: Member[];
  date: string;
  checklist: number;
  labelNames: string[];
  position: number;
}

export interface TaskList {
  todo: Task[];
  inProgress: Task[];
  completed: Task[];
}

export type Member = {
  id: number;
  name: string;
};

interface DropTaskContainerProps {
  tasks: Array<{
    id: string;
    labelNames: string[];
    name: string;
    members: Member[];
    date: string;
    checklist: number;
    position: number;
  }>;
  moveTask: (
    id: string,
    currentContainer: keyof TaskList,
    newContainer: keyof TaskList
  ) => void;
  containerName: keyof TaskList;
}

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
