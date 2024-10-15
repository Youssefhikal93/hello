interface Member {
  id: number;
  name: string;
}

interface Task {
  id: string;
  name: string;
  members: Member[];
  date: string;
  checklist: number;
  labelNames: string[];
  position: number;
}

interface TaskList {
  todo: Task[];
  inProgress: Task[];
  completed: Task[];
}

const initialTasks: TaskList = {
  todo: [
    {
      id: "1",
      name: "Task name A",
      members: [
        { id: 1, name: "Alice Maria" },
        { id: 2, name: "Bob Taylor" },
      ],
      date: "2023-10-01", // Hardcoded date
      checklist: 3, // Random number between 0 and 10
      labelNames: ["Low"], // Added labelNames
      position: 1,
    },
    {
      id: "2",
      name: "Task name B",
      members: [
        { id: 3, name: "Charlie Brown" },
        { id: 4, name: "Diana Prince" },
        { id: 5, name: "Ethan Hunt" },
      ],
      date: "2023-10-02", // Hardcoded date
      checklist: 2, // Random number between 0 and 10
      labelNames: ["Medium"], // Added labelNames
      position: 2,
    },
  ],
  inProgress: [
    {
      id: "3",
      name: "Task name C",
      members: [
        { id: 6, name: "Fiona Gallagher" },
        { id: 7, name: "George Costanza" },
      ],
      date: "2023-10-03", // Hardcoded date
      checklist: 10, // Random number between 0 and 10
      labelNames: ["High", "Medium"], // Added labelNames
      position: 3,
    },
  ],
  completed: [
    {
      id: "4",
      name: "Task name D",
      members: [
        { id: 8, name: "Hannah Montana" },
        { id: 9, name: "Ivy League" },
      ],
      date: "2023-10-04", // Hardcoded date
      checklist: 5, // Random number between 0 and 10
      labelNames: ["Low"], // Added labelNames
      position: 1,
    },
    {
      id: "5",
      name: "Task name E",
      members: [
        { id: 10, name: "Jack Sparrow" },
        { id: 11, name: "Katherine Johnson" },
        { id: 12, name: "Leonardo DiCaprio" },
      ],
      date: "2023-10-05", // Hardcoded date
      checklist: 4, // Random number between 0 and 10
      labelNames: ["Medium"], // Added labelNames
      position: 1,
    },
    {
      id: "6",
      name: "Task name F",
      members: [
        { id: 13, name: "Mia Wallace" },
        { id: 14, name: "Nina Simone" },
      ],
      date: "2023-10-06", // Hardcoded date
      checklist: 0, // Random number between 0 and 10
      labelNames: ["High", "Low"], // Added labelNames
      position: 4,
    },
  ],
};

export default initialTasks;
