# Set up devcontainer

# Set up basic app with CLI
## Create app
```
ng new angular-tutorial --directory . --inline-template
```
## Run app
```
ng serve
```
OR
```
npm run start
```

## Commit

# Fix environment to run tests in docker container
Update package.json
Add karma.conf.json

## Run tests
```
npm run test
```

## Commit

# Add a components
```
ng generate component components/navbar/navbar --inline-template
```
Add component to app component

Changes
```
import { NavbarComponent } from "@components/navbar/navbar/navbar.component";
...
imports: [RouterOutlet, NavbarComponent],
...
<app-navbar/>
```
Full code
```
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "@components/navbar/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar/>
    <h1>Hello, {{title}}!</h1>

    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';
}
```

## commit