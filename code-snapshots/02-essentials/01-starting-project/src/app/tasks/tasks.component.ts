import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskData, Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

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
    isAddingTask = false;

    constructor(private tasksService: TasksService) {}

    get selectedUserTasks() {
      return this.tasksService.getUserTasks(this.selectedUser.id);
    }

    onCompleteTask(taskId: number) {
      this.tasksService.completeTask(taskId);
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

    onAddTask(newTaskData: NewTaskData) {
      this.tasksService.addTask(newTaskData, this.selectedUser.id);
      this.isAddingTask = false;
    }
}
