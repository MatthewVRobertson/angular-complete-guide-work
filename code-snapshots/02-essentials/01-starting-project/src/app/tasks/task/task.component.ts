import { Component, Input, input, InputSignal } from '@angular/core';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task : InputSignal<Task> = input.required<Task>();
}
