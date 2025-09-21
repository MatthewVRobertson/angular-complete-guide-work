import { Component, EventEmitter, Input, input, InputSignal, output, Output } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, CardComponent],
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
