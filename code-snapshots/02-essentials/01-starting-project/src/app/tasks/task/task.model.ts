export class Task {
  userId?: string;
  dueDate?: Date; // Added date as the fourth parameter

  constructor(
    public id: number,
    public title: string,
    public summary: string
  ) {}
}

export interface NewTaskData {
  title: string;
  summary: string;
  dueDate: Date; // Added date to the interface
}
