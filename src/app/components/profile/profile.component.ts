import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class ProfileComponent implements OnChanges {
  @Input() profileUserName: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes triggered');
    console.log(changes);
  }

}
