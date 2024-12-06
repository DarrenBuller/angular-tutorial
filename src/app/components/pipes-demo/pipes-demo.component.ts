import { PowerPipe } from './../../pipe/power.pipe';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe, DecimalPipe, PercentPipe, CurrencyPipe, DatePipe, JsonPipe, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  imports: [UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
    SlicePipe,
    PowerPipe],
  template: `
  <h1>UpperCasePipe</h1>
  <p>Import UpperCasePipe and add | uppercase </p>
  <p>{{uppercaseMe | uppercase}}</p>
  <h1>LowerCasePipe</h1>
  <p>Import LowerCasePipe and add | lowercase </p>
  <p>{{lowercaseMe | lowercase}}</p>
  <h1>TitleCasePipe</h1>
  <p>Import TitleCasePipe and add | titlecase </p>
  <p>{{titleCaseMe | titlecase}}</p>
  <h1>Number pipe</h1>
  <p>Import DecimalPipe and add | number </p>
  <p>{{12345.11 | number}}</p>
  <h1>Percent pipe</h1>
  <p>Import PercentPipe and add | percent </p>
  <p>{{12345.11 | percent}}</p>
  <h1>Currency pipe</h1>
  <p>Import CurrencyPipe and add | currency</p>
  <p>{{12345.11 | currency}}</p>
  <p>Display in euros | currency : 'EUR'</p>
  <p>{{12345.11 | currency : 'EUR'}}</p>
  <p>Display in pounds | currency : 'GBR' : '£'</p>
  <p>{{12345.11 | currency : 'GBR' : '£'}}</p>
  <h1>Date pipe</h1>
  <p>No formating: {{today}}</p>
  <p>Import DatePipe and add | date</p>
  <p>{{today | date}}</p>
  <p>{{today | date: 'short'}} short</p>
  <p>{{today | date: 'medium'}} - medium</p>
  <p>{{today | date: 'long'}} - long</p>
  <p>{{today | date: 'full'}} - full</p>
  <p>{{today | date: 'dd/MM/yyyy'}} - dd/MM/yyyy</p>
  <p>{{today | date: 'dd-MM-yyyy'}} - dd-MM-yyyy</p>
  <p>{{today | date: 'hh:mm:ss a'}} - hh:mm:ss a</p>
  <p>{{today | date: 'HH:mm:ss'}} - HH:mm:ss</p>
  <p>{{user | json}}</p>
  <p>{{uppercaseMe | slice : 6}}</p>
  <p>{{uppercaseMe | slice : 6 | uppercase}}</p>
  <h1>Custom power pipe</h1>
  <p>{{2 | power : 2}}</p>
  <p></p>

  `,
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {

  uppercaseMe: string = 'to Upper Case';
  lowercaseMe: string = 'To LOWER Case';
  titleCaseMe: string = 'fred smith'
  today = new Date();
  user: any = {
    forename: 'fred',
    surname: 'smith'
  }
}
