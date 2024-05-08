{
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

    getTasks(): Task[] {
      return this.tasks;
    }

    addTask(task: Task): void {
      this.tasks.push(task);
    }

    completeTask(index: number): void {
      this.tasks[index].markAsCompleted();
    }
  }

  class UiManager {
    displayTasks(tasks: Task[]): void {
      // ...logic
    }
  }

  const taskManager = new TaskManager();
  const uiManager = new UiManager();

  const task1 = new Task('Completar el informe');
  taskManager.addTask(task1);

  const tasks = taskManager.getTasks();
  uiManager.displayTasks(tasks);

  taskManager.completeTask(0);
  uiManager.displayTasks(tasks);
}
