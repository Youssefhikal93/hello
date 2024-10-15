import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import TaskCard from "../ui/taskCard";

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

type Member = {
  id: number;
  name: string;
};

interface DropContainerProps {
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

const DropContainer: React.FC<DropContainerProps> = ({
  tasks,
  moveTask,
  containerName,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item: { id: string; currentContainer: keyof TaskList }) =>
      moveTask(item.id, item.currentContainer, containerName),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const ref = useRef<HTMLDivElement>(null); // Create a ref with useRef
  drop(ref); // Use the drop function to connect the ref

  return (
    <div
      ref={ref}
      className={`bg-gray-100 rounded-[20px] px-4 py-4 ${
        isOver && canDrop ? "bg-green-200" : ""
      }`}
    >
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          labelNames={task.labelNames}
          taskName={task.name}
          members={task.members}
          date={new Date(task.date)} // Convert string to Date
          checklist={task.checklist}
          position={task.position}
          moveTask={moveTask}
          currentContainer={containerName}
        />
      ))}
    </div>
  );
};

export default DropContainer;
