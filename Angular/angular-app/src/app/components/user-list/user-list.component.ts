import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule], // Add FormsModule to imports
})

export class UserListComponent {
  @Input() users: User[] = [];
  @Output() userSelected = new EventEmitter<User>();

  search = '';

  filteredUsers() {
    return this.users.filter(user => user.name.toLowerCase().includes(this.search.toLowerCase()));
  }

  selectUser(user: any) {
    this.userSelected.emit(user);
  }
}

export type User = {
  id: number;
  name: string;
};
