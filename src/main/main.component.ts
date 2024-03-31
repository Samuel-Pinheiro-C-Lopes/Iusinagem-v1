import { Component } from '@angular/core';

import { MatDivider } from '@angular/material/divider';

import { StepperComponent } from './stepper/stepper.component';
import { CatalogComponent } from './catalog/catalog.component';

/*
data type for the inserts arrays that will be treated by the application
and used to provide the user the best tools and it's parameters and
specific variables according to the situation inputed in the stepper component
*/
export interface insert {
  iso: string,
  geometria: string,
  classe: number,
  vc: number,
  fn: number,
  ap: number,
  material: string,
  condition: string,
  machine: string,
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StepperComponent, CatalogComponent, MatDivider],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class AppMainComponent {

  //data for the external machining inserts - Sandvik Coromant
  external:insert[] = [
    //Coroturn107 para aços - pág 11 -> 13

      //boas condições
      {iso: "CCMT 06 02 02", geometria: "PF", classe: 4325, vc: 495, fn: 0.06, ap: 0.25, material: "p", condition: "Boa", machine: "Coroturn 107"},

      {iso: "CCMT 09 T3 02", geometria: "PF", classe: 4325, vc: 485, fn: 0.08, ap: 0.25, material: "p", condition: "Boa", machine: "Coroturn 107"},

      {iso: "CCMT 09 T3 08", geometria: "PF", classe: 4315, vc: 530, fn: 0.15, ap: 0.40, material: "p", condition: "Boa", machine: "Coroturn 107"},

      {iso: "DCMT 07 02 02", geometria: "PF", classe: 4325, vc: 495, fn: 0.06, ap: 0.25, material: "p", condition: "Boa", machine: "Coroturn 107"},

      {iso: "DCMT 11 T3 02", geometria: "PF", classe: 4325, vc: 485, fn: 0.08, ap: 0.25, material: "p", condition: "Boa", machine: "Coroturn 107"},

      {iso: "DCMT 11 T3 08", geometria: "PF", classe: 4315, vc: 530, fn: 0.15, ap: 0.40, material: "p", condition: "Boa", machine: "Coroturn 107"},

      {iso: "TCMT 09 02 02", geometria: "PF", classe: 4325, vc: 495, fn: 0.06, ap: 0.25, material: "p", condition: "Boa", machine: "Coroturn 107"},

      {iso: "TCMT 11 03 02", geometria: "PF", classe: 4325, vc: 490, fn: 0.07, ap: 0.25, material: "p", condition: "Boa", machine: "Coroturn 107"},
      
      {iso: "TCMT 11 03 08", geometria: "PF", classe: 4315, vc: 550, fn: 0.13, ap: 0.40, material: "p", condition: "Boa", machine: "Coroturn 107"},

      {iso: "CCMT 06 02 08", geometria: "PM", classe: 4315, vc: 560, fn: 0.11, ap: 1.20, material: "p", condition: "Boa", machine: "Coroturn 107"},

      //médias condições
      {iso: "CCMT 09 T3 08", geometria: "PF", classe: 4325, vc: 440, fn: 0.15, ap: 0.40, material: "p", condition: "Media", machine: "Coroturn 107"},

      {iso: "DCMT 11 T3 08", geometria: "PF", classe: 4325, vc: 440, fn: 0.15, ap: 0.40, material: "p", condition: "Media", machine: "Coroturn 107"},

      {iso: "TCMT 11 03 08", geometria: "PF", classe: 4325, vc: 450, fn: 0.13, ap: 0.40, material: "p", condition: "Media", machine: "Coroturn 107"},

      //difíceis condições
      {iso: "CCMT 09 T3 08", geometria: "PM", classe: 4335, vc: 250, fn: 0.20, ap: 1.70, material: "p", condition: "Dificil", machine: "Coroturn 107"},

      {iso: "DCMT 11 T3 08", geometria: "PM", classe: 4335, vc: 250, fn: 0.20, ap: 1.70, material: "p", condition: "Dificil", machine: "Coroturn 107"},

      {iso: "TCMT 11 03 08", geometria: "Pm", classe: 4335, vc: 265, fn: 0.17, ap: 1.20, material: "p", condition: "Dificil", machine: "Coroturn 107"},

     //Coroturn107 para aços inóx - pág 11 -> 13

      //boas condições
      {iso: "CCMT 09 T3 08", geometria: "MF", classe: 2015, vc: 275, fn: 0.15, ap: 0.40, material: "m", condition: "Boa", machine: "Coroturn 107"},

      {iso: "DCMT 11 T3 08", geometria: "MF", classe: 2015, vc: 275, fn: 0.15, ap: 0.40, material: "m", condition: "Boa", machine: "Coroturn 107"},

      {iso: "TCMT 11 03 08", geometria: "MF", classe: 2015, vc: 285, fn: 0.13, ap: 0.40, material: "m", condition: "Boa", machine: "Coroturn 107"},
  
      //médias condições
      {iso: "CCMT 09 T3 08", geometria: "MF", classe: 2220, vc: 255, fn: 0.15, ap: 0.40, material: "m", condition: "Media", machine: "Coroturn 107"},

      {iso: "DCMT 11 T3 08", geometria: "MF", classe: 2220, vc: 255, fn: 0.15, ap: 0.40, material: "m", condition: "Media", machine: "Coroturn 107"},

      {iso: "TCMT 11 03 08", geometria: "MF", classe: 1115, vc: 235, fn: 0.13, ap: 0.40, material: "m", condition: "Media", machine: "Coroturn 107"},
  
      //difíceis condições
      {iso: "CCMT 09 T3 08", geometria: "MM", classe: 2025, vc: 195, fn: 0.20, ap: 1.70, material: "m", condition: "Dificil", machine: "Coroturn 107"},

      {iso: "DCMT 11 T3 08", geometria: "MM", classe: 2025, vc: 195, fn: 0.20, ap: 1.70, material: "m", condition: "Dificil", machine: "Coroturn 107"},

      {iso: "TCMT 11 03 08", geometria: "MM", classe: 2015, vc: 265, fn: 0.17, ap: 1.20, material: "m", condition: "Dificil", machine: "Coroturn 107"},

    //Coroturn107 para ferro fundido - pág 11 -> 13

      //boas condições
      {iso: "CCMT 09 T3 08", geometria: "KF", classe: 3210, vc: 360, fn: 0.11, ap: 0.30, material: "k", condition: "Boa", machine: "Coroturn 107"},

      {iso: "DCMT 11 T3 08", geometria: "KF", classe: 3210, vc: 345, fn: 0.15, ap: 0.40, material: "k", condition: "Boa", machine: "Coroturn 107"},

      {iso: "TCMT 11 03 08", geometria: "KF", classe: 3210, vc: 355, fn: 0.13, ap: 0.40, material: "k", condition: "Boa", machine: "Coroturn 107"},

      //médias condições
      {iso: "CCMT 09 T3 08", geometria: "KF", classe: 3225, vc: 235, fn: 0.15, ap: 0.40, material: "k", condition: "Media", machine: "Coroturn 107"},

      {iso: "DCMT 11 T3 08", geometria: "KF", classe: 3225, vc: 235, fn: 0.15, ap: 0.40, material: "k", condition: "Media", machine: "Coroturn 107"},

      {iso: "TCMT 11 03 08", geometria: "KF", classe: 3225, vc: 240, fn: 0.13, ap: 0.40, material: "k", condition: "Media", machine: "Coroturn 107"},

      //difíceis condições
      {iso: "CCMT 09 T3 08", geometria: "KM", classe: 3225, vc: 225, fn: 0.20, ap: 1.70, material: "k", condition: "Dificil", machine: "Coroturn 107"},

      {iso: "DCMT 11 T3 08", geometria: "KM", classe: 3225, vc: 225, fn: 0.20, ap: 1.70, material: "k", condition: "Dificil", machine: "Coroturn 107"},

      {iso: "TCMT 11 03 08", geometria: "KM", classe: 3225, vc: 230, fn: 0.17, ap: 1.20, material: "k", condition: "Dificil", machine: "Coroturn 107"},
    
    //Coroturn107 para superliga

      //boas condições
      {iso: "CCGT 09 T3 08", geometria: "UM", classe: 1105, vc: 80, fn: 0.14, ap: 1.25, material: "s", condition: "Boa", machine: "Coroturn 107"},

      {iso: "DCGT 11 T3 08", geometria: "UM", classe: 1105, vc: 80, fn: 0.14, ap: 1.25, material: "s", condition: "Boa", machine: "Coroturn 107"},

      {iso: "TCGT 11 03 08", geometria: "UM", classe: 1115, vc: 65, fn: 0.14, ap: 1.25, material: "s", condition: "Boa", machine: "Coroturn 107"},
  
      //médias condições
      {iso: "CCGT 09 T3 08", geometria: "UM", classe: 1105, vc: 65, fn: 0.14, ap: 1.25, material: "s", condition: "Media", machine: "Coroturn 107"},

      {iso: "DCGT 11 T3 08", geometria: "UM", classe: 1105, vc: 65, fn: 0.14, ap: 1.25, material: "s", condition: "Media", machine: "Coroturn 107"},

      {iso: "TCGT 11 03 08", geometria: "UM", classe: 1115, vc: 65, fn: 0.14, ap: 1.25, material: "s", condition: "Media", machine: "Coroturn 107"},
  
      //difíceis condições
      {iso: "CCGT 09 T3 08", geometria: "UM", classe: 1125, vc: 35, fn: 0.14, ap: 1.25, material: "s", condition: "Dificil", machine: "Coroturn 107"},

      {iso: "DCGT 11 T3 08", geometria: "UM", classe: 1125, vc: 35, fn: 0.14, ap: 1.25, material: "s", condition: "Dificil", machine: "Coroturn 107"},

      {iso: "TCGT 11 03 08", geometria: "UM", classe: 1125, vc: 35, fn: 0.14, ap: 1.25, material: "s", condition: "Dificil", machine: "Coroturn 107"},
  
  ];

  //data for the internal machining
  internal:insert[] = [

  
  ];
}
