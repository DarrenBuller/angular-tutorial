import { JsonPipe, NgFor } from '@angular/common';
import { UserService } from './../../services/user.service';
import { Component, Injectable, Input, input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  imports: [JsonPipe,
    NgFor
  ],
  template: `
    <p>
      users-list works!
    </p>
    <h1>{{childUser}}</h1>
    <h1>{{userService.users | json}}</h1>
    <ul>
      <li *ngFor="let user of userService.users">li {{user.name}} {{user.email}}</li>
    </ul>
    <button (click)="addUser()">Add User</button>
  `,
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {


  @Input() childUser: any;
  userService: any;
  constructor(private userServiceDi: UserService) {
    this.userService = userServiceDi;
  }

  addUser() {
    this.userService.addUser();
  }

}
