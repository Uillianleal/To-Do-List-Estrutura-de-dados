import TaskList from "./task-list.js";
import { Task, TaskStatus } from "./task.js";

const showTasks = (taskList) => {
  taskList.forEach((item) => {
    showTask(item);
  });
};

const showTask = (item) => {
  if (item == null) {
    console.log("Task not found");
    return;
  }
  console.log(
    `Task: ${item.id} | Description: ${item.description} | Tag: ${item.tag} | Status: ${item.status}`
  );
};

const task1 = new Task(1, "Daily with a team", "meeting");
const task2 = new Task(
  2,
  "Implement some feature",
  "job",
  TaskStatus.COMPLETED
);
const task3 = new Task(3, "Reading a book", "study", TaskStatus.COMPLETED);
const task4 = new Task(4, "Review a documentation", "job");
const task5 = new Task(5, "Review a project", "meeting");
const task6 = new Task(6, "Deploye a project", "job");
const task7 = new Task(7, "Reeding article", "study");

const taskList = new TaskList();

taskList.addTask(task1);
taskList.addTask(task2);
taskList.addTask(task3, 0);
taskList.addTask(task4, 10);
taskList.addTask(task4);
taskList.addTask(task5, 2);
taskList.addTask(task6);
taskList.addTask(task7);

// 1 - Get All task
showTasks(taskList.getTasks());

// 2 - Get task by tag
/*console.log("show task by job:");
showTasks(taskList.getTasksByTag("job"));
console.log("show task by study:");
showTasks(taskList.getTasksByTag("study"));*/

// 3 - Get task by id
/*console.log("show task by id: 2");
showTask(taskList.getTaskById(2));
showTask(taskList.getTaskById(50));*/

// 3 - remove task by id
/*let id = 3;
console.log(`Remove task ${id}`);
taskList.removeTaskById(id);
showTasks(taskList.getTasks());*/

// 4 - Mark a task as completed by id
/*let id = 1;
console.log(`Set task ${id} to completed...`);
showTask(taskList.setTeskToCompleted(id));*/

// 5 - Update task data
const taskUpdate = new Task(null, "Reading working article", "job");
showTask(taskList.setTeskToDataById(7, taskUpdate));

// 6 - Move task
console.log("Move task...");
console.log(taskList.move(7, 1));
taskList.move(3, 5);
showTasks(taskList.getTasks());
