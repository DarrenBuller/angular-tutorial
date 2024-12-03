import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from "./components/posts-list/posts-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, PostsListComponent],
  template: `
    <!--
    <app-header/>
    <app-navbar/>
    -->
    <h1>-----{{postListTitle}}-----</h1>
    <app-posts-list (messageEvent)="receiveButtonMessage($event)" [postTitle]="postListTitle" [isLoggedIn]="appIsLoggedIn"/>
    <h2>Child message after view init: {{message}}</h2>
    <h2>Child message from event: {{messageFromChildEvent}}</h2>
    <!--
    <h1>Hello, {{title}}!</h1>
    <h2 class="text-5xl font-bold underline">Tailwind works!</h2>
    -->

    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{

  title = 'angular-tutorial';
  postListTitle: string = 'Some title fffffff';
  appIsLoggedIn: boolean = true;
  @ViewChild(PostsListComponent) childMessage: any;
  message: string = '';
  messageFromChildEvent: string = '';

  constructor(){
    console.log('constructor childMessage: ' + this.childMessage);
  }
  ngAfterViewInit(): void {
    console.log(this.childMessage);
    this.message = this.childMessage.childMessage;
  }
  receiveButtonMessage(message: any) {
    console.log(message);
    this.messageFromChildEvent = message;
  }
}
