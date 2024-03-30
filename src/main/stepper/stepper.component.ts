import { Component } from '@angular/core';

import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-stepper',
  standalone: true,
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
  imports: [    
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {

  elements = [
    'Eixo',
    'Flange',
  ]

  ElementGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  

  constructor(private _formBuilder: FormBuilder) {}
}
