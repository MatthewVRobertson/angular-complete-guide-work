import { Injectable } from '@angular/core';
import { NewTaskData, Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  completeTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  private tasks: Task[] = [];
  constructor() {
    this.tasks = [
      Object.assign(
        new Task(
          1,
          'Design Landing Page',
          'Create a responsive landing page for the new product.'
        ),
        { userId: 'u1', dueDate: '2024-12-31' }
      ),
      Object.assign(
        new Task(
          2,
          'Implement Authentication',
          'Set up user authentication using OAuth 2.0.'
        ),
        { userId: 'u2', dueDate: '2024-12-31' }
      ),
      Object.assign(
        new Task(
          3,
          'Database Schema Design',
          'Design the database schema for the application.'
        ),
        { userId: 'u3', dueDate: '2024-12-31' }
      ),
    ];
  }

  addTask(newTaskData: NewTaskData, userId: string) {
    const newTaskId = new Date().getMilliseconds();
      const newTask = Object.assign(
        new Task(newTaskId, newTaskData.title, newTaskData.summary),
        { userId: userId }
      );
      this.tasks.push(newTask);
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
}

export type TaskQuery = {
  ownerId?: string;
};
