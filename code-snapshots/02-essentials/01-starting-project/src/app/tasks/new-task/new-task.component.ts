import { Component, output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NewTaskData, Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  cancel = output<void>();
  add = output<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate: Date = new Date(Date.now());

  onCancelClicked() {
    // Logic to cancel adding a new task
    this.cancel.emit();
  }

  onSubmit() {
    const newTask : NewTaskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: new Date() // Placeholder, will be replaced below
    };

    newTask.dueDate = this.enteredDate;

    this.add.emit(newTask);
  }
}

