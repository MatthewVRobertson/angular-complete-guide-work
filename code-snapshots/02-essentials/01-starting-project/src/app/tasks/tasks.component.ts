import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  [x: string]: any;
  @Input({required: true}) selectedUser!: any;
    tasks: Task[];
    isAddingTask = false;

    constructor() {
      this.tasks = [
        Object.assign(
          new Task(1, 'Design Landing Page', 'Create a responsive landing page for the new product.'),
          { userId: 'u1' }),
        Object.assign(
          new Task(2, 'Implement Authentication', 'Set up user authentication using OAuth 2.0.'),
          { userId: 'u2' }),
        Object.assign(
          new Task(3, 'Database Schema Design', 'Design the database schema for the application.'),
          { userId: 'u3' }),
      ];
    }

    get selectedUserTasks() {
      return this.tasks.filter(task => task.userId === this.selectedUser.id);
    }

    onCompleteTask(taskId: number) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    onStartingAddTask() {
      this.isAddingTask = true;
    }

    onEndingAddTask() {
      this.isAddingTask = false;
    }

    onCancelAddTask() {
        this.isAddingTask = false;
    }

    onAddTask() {
      const newTaskId = this.tasks.length + 1;
      const newTask = Object.assign(
        new Task(newTaskId, 'New Task', 'Description for the new task.'),
        { userId: this.selectedUser.id }
      );
      this.tasks.push(newTask);
    }
}
