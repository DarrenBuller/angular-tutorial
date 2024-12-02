import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, FormsModule, NgTemplateOutlet, NgFor],
  template: `
    <p>-----------------------Angular Directives -inline template (NavbarComponent)--------------------------------------</p>
    <p>
      navbar works, horray!
    </p>
    <p *ngIf="isLoggedIn">*ngIf {{userName}}</p>
    @if (isLoggedIn) {
      <p>if {{userName}}</p>
    }
    @else {
      <p>Not logged in</p>
    }

    <ng-template #message>
      <p>User is  not logged in template</p>
    </ng-template>

    <p *ngIf="isLoggedIn; else message"> {{userName}}</p>
    <p><label for="loggedIn">Is logged in</label><input id="loggedIn" [(ngModel)]="isLoggedIn" type="checkbox" name="isLoggedIn" /></p>
    <p><label for="usertype admin">usertype_admin</label><input id="usertype_admin" [(ngModel)]="isAdmin" type="checkbox" name="isAdmin" /></p>
    <p><label for="usertype member">usertype_member</label><input id="usertype_member" [(ngModel)]="isMember" type="checkbox" name="isMember" /></p>

    @if (isAdmin) {
      <h2>atIt Welcome Admin: {{userName}}</h2>
    } 
    @else if (isMember) {
      <h2>atIt Welcome Member: {{userName}}</h2>
    } 
    @else {
      <h2>atelse Welcome Guest</h2>
    }

    <!-- if directives number values -->
    @if (loginAttempts < 3) {
      <button (click)="onLoginClick()">Login</button>
    }
    @else {
      <h4>Exceeded login attempts</h4>
    }

    <!-- if directives string values -->
    <h4 *ngIf="userRole == 'Admin'; else memberMessage">ngif string Welcome Admin</h4> 
    <ng-template #memberMessage>
      <h4>ngif string Welcome Member</h4>
    </ng-template>

    @if (userRole == 'Admin'){
      <h4>if string Welcome Admin</h4>
    }
    @else {
      <h4>else string Welcome Member</h4>
    }

    <!-- template reuse -->
    <p>This is a normal element</p>
    <ng-template #myFragment>
      <p>This is a fragment</p>
      @if (loginAttempts < 3) {
      <button (click)="onLoginClick()">Login</button>
      }
      @else {
        <h4>Exceeded login attempts</h4>
      }
    </ng-template>
    <ng-container *ngTemplateOutlet="myFragment"></ng-container>
    <ng-container *ngTemplateOutlet="myFragment"></ng-container>

    <!-- loops -->
    <h1>Index<h1>
    <h3>{{users}}</h3>
    <h3>{{users[0]}}</h3>
    <h3>{{users[1]}}</h3>
    <h3>{{users[2]}}</h3>
    <h1>For loops old </h1>
    <h3 *ngFor="let user of users">ng {{user}}</h3>
    @for(user of users; track user) {
      <h3>for loop {{user}}</h3>
    }

    <ul>
      <li *ngFor="let user of users">li {{user}}</li>
    </ul>

    <ul>
    @for (user of users; track user) {
      <li>for li {{user}}</li>
    }
    </ul>

    <ul>
      <li *ngFor="let user of usersObj">li {{user.name}} {{user.email}}</li>
    </ul>

    <ul>
    @for (user of usersObj; track user) {
      <li>for li {{user.name}} {{user.email}}</li>
    }
    </ul>
    <button (click)="addNewUser()">Add New User</button>


    <ul>
    @for (user of usersObj; track user) {
      <li>fRemove {{user.name}} {{user.email}}<button (click)="removeUser(user)">Remove User</button></li>
    }
    </ul>

    <ul>
      <li *ngFor="let user of usersObj; let i = index">li {{i}} {{user.name}} {{user.email}}   <button (click)="onDelete(i)">onDelete</button></li>
    </ul>
    `})
export class NavbarComponent {



  userName: string = 'Joe Bloggs'
  isLoggedIn: boolean = true;
  isAdmin: boolean = false;
  isMember: boolean = false;
  loginAttempts: number = 0;
  userRole: string = 'Admin'
  users: Array<string> = ['Fred', 'Bill', 'Kate'];
  usersObj: Array<any> = [
    {id: 1, name: 'john', email: 'john@email.com'},
    {id: 2, name: 'Raj', email: 'Raj@email.com'},
    {id: 3, name: 'sam', email: 'sam@email.com'},
    {id: 4, name: 'kate', email: 'kate@email.com'},
  ]
  onLoginClick() {
    this.loginAttempts++;
  }
  addNewUser() {
    let user: any = {id: 5, name: 'kate5', email: 'kate5@email.com'}
    this.usersObj.push(user);
  }
  removeUser(user: object) {
    let index = this.usersObj.indexOf(user);
    this.usersObj.splice(index, 1);
  }
  onDelete(index: number) {
    this.usersObj.splice(index, 1);
  }
}
