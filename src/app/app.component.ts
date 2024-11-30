import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "@components/navbar/navbar.component";
import { HeaderComponent } from "@components/header/header.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, FormsModule],
  template: `
    <app-header/>
    <app-navbar/>
    <h1>Hello, {{title}}!</h1>
    <h2 class="text-5xl font-bold underline">Tailwind works!</h2>

    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';
}
