import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from "./components/posts-list/posts-list.component";
import { CardComponent } from "./components/card/card.component";
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, PostsListComponent, CardComponent, NgComponentOutlet],
  template: `
    <!--
    <app-header/>
    <app-navbar/>
    -->
    <h1>-----{{postListTitle}}-----</h1>
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

    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'angular-tutorial';
  postListTitle: string = 'Some title fffffff';
  appIsLoggedIn: boolean = true;
  @ViewChild(PostsListComponent) postList: any;
  message: string = '';
  messageFromChildEvent: string = '';
  anotherMessage: string = '';

  constructor(private viewContainer: ViewContainerRef){
    console.log('constructor childMessage: ' + this.postList);
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

}
