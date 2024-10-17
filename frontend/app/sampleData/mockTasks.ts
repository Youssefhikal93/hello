import { TaskList } from "../components/drag-drop/DropTaskContainer";

/**
 * Mock data representing a list of tasks for a task management application.
 *
 * This data structure contains tasks categorized into three states:
 * - `todo`: Tasks that are yet to be started.
 * - `inProgress`: Tasks that are currently being worked on.
 * - `completed`: Tasks that have been finished.
 *
 * Each task includes the following properties:
 * - `id`: A unique identifier for the task.
 * - `name`: The name or title of the task.
 * - `members`: An array of members assigned to the task, each with an `id` and `name`.
 * - `date`: The date associated with the task (e.g., due date).
 * - `checklist`: A number representing the number of checklist items associated with the task.
 * - `labelNames`: An array of labels categorizing the task (e.g., priority levels).
 * - `position`: The position of the task in the list (for ordering).
 */
const mockTasks: TaskList = {
  todo: [
    {
      id: "1",
      name: "Task name A",
      members: [
        { id: 1, name: "Alice Maria" },
        { id: 2, name: "Bob Taylor" },
      ],
      date: "2023-10-01",
      checklist: 3,
      labelNames: ["Low"],
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
      date: "2023-10-02",
      checklist: 2,
      labelNames: ["Medium"],
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
      date: "2023-10-03",
      checklist: 10,
      labelNames: ["High", "Medium"],
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
      date: "2023-10-04",
      checklist: 5,
      labelNames: ["Low"],
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
      date: "2023-10-05",
      checklist: 4,
      labelNames: ["Medium"],
      position: 1,
    },
    {
      id: "6",
      name: "Task name F",
      members: [
        { id: 13, name: "Mia Wallace" },
        { id: 14, name: "Nina Simone" },
      ],
      date: "2023-10-06",
      checklist: 0,
      labelNames: ["High", "Low"],
      position: 4,
    },
  ],
};

export default mockTasks;
