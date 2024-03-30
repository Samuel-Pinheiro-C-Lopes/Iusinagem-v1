import { Component } from '@angular/core';

import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';


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
    CommonModule,
    MatDividerModule,
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {

  public process_config:{
    element: string, 
    preLength: number | undefined, 
    preDiameter: number | undefined, 
    condition: string, 
    material: string,
    productsGeometry:{start: number, end: number, diameter: number}[] | undefined,
    productsParameters:{iso: string, Ac: number, fn: number, vc: number} | undefined,
  } = {
    element: '',
    preLength: undefined,
    preDiameter: undefined,
    condition: '',
    material: '',
    productsGeometry: undefined,
    productsParameters: undefined,
  };

  elements:string[] = [
    'Eixo',
    'Flange',
  ];

  conditions:string[] = [
    'Boa',
    'Média',
    'Difícil',
  ];

  materials:string[] = [
    'Aço',
    'Aço Inoxidável',
    'Ferro Fundido',
    'Superliga',
  ]

}
