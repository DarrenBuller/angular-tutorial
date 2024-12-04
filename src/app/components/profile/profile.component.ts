import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  template: `
    <p>
      profile works!
    </p>
    <p><label>AppProfile User Name: </label><input type="text" [(ngModel)]="profileUserName" /></p>
    <p>{{profileUserName}}</p>
    <button (click)="incrementCounter()">Increment Counter</button>
  `,
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck, AfterContentInit {

  @Input() profileUserName: string = '';
  counter: number = 0;

  constructor() {
    console.log('constructor triggered. profileUserName: ' + this.profileUserName);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // will be called on all changes to @Input vars
    console.log('ngOnChanges changes triggered');
    console.log(changes);
  }

  ngOnInit() {
    // Called on initialisation of the component
    // Good place to call remote service API
    console.log('On init triggered. profileUserName: ' + this.profileUserName);
  }

  ngDoCheck() {
    // custom change detection
    // will be called on all changes to variable
    console.log('ngDoCheck. profileUserName: ' + this.profileUserName);
  }
  incrementCounter() {
    this.counter++;
  }

  ngAfterContentInit() {
    // works with ngContent after the context is initialized
    console.log('ngAfterContentInit. profileUserName: ' + this.profileUserName);
  }
}
