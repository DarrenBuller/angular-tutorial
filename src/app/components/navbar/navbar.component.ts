import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, FormsModule],
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
    <p>-----------------------Angular Directives -inline template (NavbarComponent)--------------------------------------</p>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  userName: string = 'Joe Bloggs'
  isLoggedIn: boolean = true;
  isAdmin: boolean = false;
  isMember: boolean = false;
  loginAttempts: number = 0;
  userRole: string = 'Admin'
  onLoginClick() {
    this.loginAttempts++;
  }

}
