import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  imports: [],
  template: `
    <p>
      posts-list works! {{postTitle}} {{isLoggedIn}}
    </p>
    <p><label>Post Title from parent: </label><input type="text" (ngModel)="postTitle" /></p>
    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    (click)="sendMessageToParent()">Send message to Parent</button>
  `,
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  @Input() postTitle: string = '';
  @Input() isLoggedIn: boolean = false;
  @Output() messageEvent = new EventEmitter();
  childMessage: string = 'a message from child component';
  anotherChildMessage: string = 'another message from child component';
  parentMessage: string = 'Button clicked message for parent';

  sendMessageToParent() {
    console.log('sendMessageToParent ' + this.parentMessage);

    this.messageEvent.emit(this.parentMessage);
  }
}
