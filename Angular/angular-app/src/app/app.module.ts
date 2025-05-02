import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
// import { LoginComponent } from './login.component';
// import { PostComponent } from './post.component';

@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  // bootstrap: [AppComponent],
})
export class AppModule {}
