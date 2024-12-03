import { Component } from '@angular/core';
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
    <app-posts-list [postTitle]="postListTitle" [isLoggedIn]="appIsLoggedIn"/>
    <!--
    <h1>Hello, {{title}}!</h1>
    <h2 class="text-5xl font-bold underline">Tailwind works!</h2>
    -->

    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';
  postListTitle: string = 'Some title fffffff';
  appIsLoggedIn: boolean = true;
}
