import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
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
export class ProfileComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

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
    console.log('incrementCounter');
  }

  ngAfterContentInit() {
    // works with ngContent after the context is initialized
    console.log('ngAfterContentInit. profileUserName: ' + this.profileUserName);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked. profileUserName: ' + this.profileUserName);
  }
  ngAfterViewInit(): void {
    // after view is fully rendered
    // could set the initial input field here (only valid after the view is initialised)
    console.log('ngAfterViewInit. profileUserName: ' + this.profileUserName);
  }
  ngAfterViewChecked(): void {
    // every time the view changes
    console.log('ngAfterViewChecked. profileUserName: ' + this.profileUserName);
  }

  ngOnDestroy(): void {
    console.log('ngAfterViewChecked. profileUserName: ' + this.profileUserName);
  }
}
