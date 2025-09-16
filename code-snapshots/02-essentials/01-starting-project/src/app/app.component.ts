import { Component, computed, EventEmitter, Output, signal } from '@angular/core';
import { HeaderComponent } from "./header/header";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;
  //selectedUserId = signal('u1');
  //selectedUserChanged: EventEmitter<int> = new
/*
  selectedUser = computed(()=>{
    const userId = this.selectedUserId();
    console.log("compute triggered " + userId);
    return DUMMY_USERS.find(user=>user.id == userId)!;
  });
*/
  get selectedUser()
  {
    return DUMMY_USERS.find(user=>user.id == this.selectedUserId)!;
  };

  onSelectUser(id: string) {
    console.log('Selected ' + id);
    //this.selectedUserId.set(id);
    this.selectedUserId = id;
  }
}
