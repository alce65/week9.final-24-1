class Task {
  completed: boolean;

  constructor(public name: string) {
    this.completed = false;
  }

  markAsCompleted(): void {
    this.completed = true;
  }
}

class TaskManager {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  completeTask(index: number): void {
    this.tasks[index].markAsCompleted();
  }

  displayTasks(): void {
    // ...logic
  }
}

const taskManager = new TaskManager();
const task1 = new Task('Completar el informe');

taskManager.addTask(task1);
taskManager.displayTasks();

taskManager.completeTask(0);
taskManager.displayTasks();
