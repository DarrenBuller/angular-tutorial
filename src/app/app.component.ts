import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from "./components/posts-list/posts-list.component";
import { CardComponent } from "./components/card/card.component";
import { NgComponentOutlet, JsonPipe } from '@angular/common';
import { ProfileComponent } from "./components/profile/profile.component";
import { PipesDemoComponent } from "./components/pipes-demo/pipes-demo.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserService } from './services/user.service';
import { FormExampleComponent } from "@components/form-example/form-example.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe, FormsModule, PostsListComponent, CardComponent, NgComponentOutlet, ProfileComponent, PipesDemoComponent, UsersListComponent, FormExampleComponent],
  template: `
    <!--
    <app-header/>
    <app-navbar/>
    -->
    <h1>-----{{title}}-----</h1>
    <app-posts-list (messageEvent)="receiveButtonMessage($event)" [postTitle]="postListTitle" [isLoggedIn]="appIsLoggedIn"/>
    <h2>Child message after view init: [{{message}}] [{{anotherMessage}}]</h2>
    <h2>Child message from event: {{messageFromChildEvent}}</h2>
    <app-card>
      <span forename>Joe</span>
      <span surname>Smith</span>
    </app-card>

    <!--
    <h1>Hello, {{title}}!</h1>
    <h2 class="text-5xl font-bold underline">Tailwind works!</h2>
    -->
    <h1>-----loadComponent on load-----</h1>
    <div *ngComponentOutlet="loadComponent()">loadComponent</div>

    <h1>-----button click create component-----</h1>
    <button (click)="buttonCreateComponent()">create component</button>

    <h1>-----button click remove component-----</h1>
    <button (click)="buttonRemoveComponent()">remove component</button>

    <h1>-----app-profile-----</h1>
    <app-profile [profileUserName]="userName"></app-profile>
    <p><label>AppComponent User Name: </label><input type="text" [(ngModel)]="userName" /></p>

    <button (click)="changeUserName()">Change User Name</button>
    <app-pipes-demo></app-pipes-demo>
    <h1>------------Services Example----------------------</h1>
    <app-users-list [childUser]="userName"></app-users-list>
    <p>{{userService.users | json}}</p>
    <h1>------------Form Example-------------------</h1>
    <app-form-example></app-form-example>
    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  title = 'angular-tutorial';
  postListTitle: string = 'Some title fffffff';
  appIsLoggedIn: boolean = true;
  @ViewChild(PostsListComponent) postList: any;
  message: string = '';
  messageFromChildEvent: string = '';
  anotherMessage: string = '';
  userName: string = 'Fred Smith';
  userService: any;

  constructor(private viewContainer: ViewContainerRef, private userServiceDi: UserService) {
    console.log('constructor childMessage: ' + this.postList);
    this.userService = userServiceDi;
  }
  ngAfterViewInit(): void {
    console.log(this.postList);
    this.message = this.postList.childMessage;
    this.anotherMessage = this.postList.anotherChildMessage;
  }
  receiveButtonMessage(message: any) {
    console.log(message);
    this.messageFromChildEvent = message;
  }

  loadComponent(): import("@angular/core").Type<any> | null {
    return PostsListComponent;
  }

  buttonCreateComponent() {
    this.viewContainer.createComponent(PostsListComponent);
  }

  buttonRemoveComponent() {
    this.viewContainer.remove();
  }

  changeUserName() {
    this.userName = 'Bill Bloggs';
  }
}
