import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  template: `
    <p>
      profile works!
    </p>
    <p><label>User Name: </label><input type="text" [(ngModel)]="profileUserName" /></p>
    <p>{{profileUserName}}</p>
  `,
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck {
  @Input() profileUserName: string = '';

  constructor() {
    console.log('constructor triggered. profileUserName: ' + this.profileUserName);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes triggered');
    console.log(changes);
  }

  ngOnInit() {
    // Called on initialisation of the component
    // Good place to call remote service API
    console.log('On init triggered. profileUserName: ' + this.profileUserName);
  }

  ngDoCheck() {
    // custom change detection
    // will be called on all changes
    console.log('ngDoCheck. profileUserName: ' + this.profileUserName);
  }
}
