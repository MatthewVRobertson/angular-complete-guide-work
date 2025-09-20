import { Component, EventEmitter, Input, input, InputSignal, output, Output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  complete = output<number>();
  task : InputSignal<Task> = input.required<Task>();

  onCompletedTask() {
    this.complete.emit(this.task().id);
  }
}
