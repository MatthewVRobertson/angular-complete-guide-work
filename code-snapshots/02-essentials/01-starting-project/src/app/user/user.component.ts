import { Component, computed, EventEmitter, Input, input, InputSignal, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user! : User;
  isSelected : InputSignal<boolean> = input.required<boolean>();
  @Output() select = new EventEmitter();

  //@Input({required: true}) id!: string;
  //@Input({required : true}) avatar!: string;
  //@Input({required : true}) name!: string;
  //@Output() select = new EventEmitter();
  //select = output<string>();
  //avatar = input.required<string>();
  //name = input.required<string>();
  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar);
  //imagePath = computed(()=>'assets/users/' + this.avatar());
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //this.select.emit(this.id);
    this.select.emit(this.user.id);
  }
}
