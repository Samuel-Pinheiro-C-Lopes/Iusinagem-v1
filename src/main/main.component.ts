import { Component } from '@angular/core';

import { StepperComponent } from './stepper/stepper.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StepperComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class AppMainComponent {

}
