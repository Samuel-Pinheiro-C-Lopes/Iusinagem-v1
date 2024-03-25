import { Component } from '@angular/core';

import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatStepperModule, ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class AppMainComponent {

}
