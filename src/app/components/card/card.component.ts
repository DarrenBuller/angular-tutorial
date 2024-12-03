import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <p>
    card works!
    </p>
    <h1>
    <ng-content select="[forename]"></ng-content>
    </h1>
    <h1>stuff</h1>
    <h4>
    <ng-content select="[surname]"></ng-content>
    </h4>

  `,
  styleUrl: './card.component.css'
})
export class CardComponent {

}
