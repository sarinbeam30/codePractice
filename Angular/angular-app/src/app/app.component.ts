import { Component } from '@angular/core';
import { User, UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserListComponent, LoginComponent, PostComponent],
  standalone: true,
})
export class AppComponent {
  users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

  onSelectUser(user: User){
    console.log('selected:', user);
  }
}
