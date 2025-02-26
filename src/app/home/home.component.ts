import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UserComponent } from '../user/user.component';
import { DUMMY_USERS } from '../dummy-users';
@Component({
  selector: 'app-home',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  users = DUMMY_USERS;

}
