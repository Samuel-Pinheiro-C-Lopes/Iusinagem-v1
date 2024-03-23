import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { AppMainComponent } from './main/main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-toolbar></app-toolbar>
    <app-main></app-main>
  `,
  imports: [AppMainComponent, ToolbarComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync()]
});
