import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  imports: [],
  template: `
    <p>
      posts-list works! {{postTitle}} {{isLoggedIn}}
    </p>
  `,
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  @Input() postTitle: string = '';
  @Input() isLoggedIn: boolean = false;
}
