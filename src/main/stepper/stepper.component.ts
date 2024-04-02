//Basic module for the component behavior, core for the Angular application
import { Component, Input } from '@angular/core';

//All the modules required for the component
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { insert } from '../main.component';
import { PanelComponent } from '../panel/panel.component';




@Component({
  selector: 'app-stepper',
  standalone: true,
  providers: [],
  imports: [    
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    PanelComponent
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {


  /*
  Object responsible for saving all the data the user inputs in the stepper
  It has the element the user wants to make, it's length and diameter before the whole process,
  it's condition and material, and all the measurement changes aimed
  It's essential for the application since it's data will be used to determine the inserts,
  drills, and then, accordingly, determine all the variables within the calculations needed
  */
  public process_config:{
    element: string, 
    preLength?: number, 
    preDiameter?: number, 
    condition: string, 
    material: string,
    productsExternalGeometry?:{start?: number, end?: number, diameter?: number}[],
    productsInternalGeometry?:{start?: number, end?: number, diameter?: number}[],
    productsParameters?:{iso: string, class: number, vc: number, fn: number, ap: number, },
  } = {
    element: '',
    preLength: undefined,
    preDiameter: undefined,
    condition: '',
    material: '',
    productsExternalGeometry: [
      {start: undefined, end: undefined, diameter: undefined},
    ],
    productsInternalGeometry: [
      {start: undefined, end: undefined, diameter:undefined},
    ],
    productsParameters: undefined,
  };

  @Input() externalInsertData?:insert[];

  //available elements
  elements:string[] = [
    'Eixo',
    'Flange',
  ];

  //available conditions for the element before it treatment 
  conditions:string[] = [
    'Boa',
    'Média',
    'Difícil',
  ];

  //available materials for the element 
  materials:string[] = [
    'Aço',
    'Aço Inoxidável',
    'Ferro Fundido',
    'Superliga',
  ];

  /*
  Function responsible for adding - pushing - a new geometry inside the array of external measurements inputed by the user.
  According to the type of button that called the function, a different array will have a push - since there is one
  for the external geometry and one for the internal geometry
  */
  addNewGeometry(type: string):number {
    if (type === "external") 
    {
      this.process_config.productsExternalGeometry?.push({start: undefined, end: undefined, diameter: undefined});
      return 1;
    }
    else if (type === "internal")
    {
      this.process_config.productsInternalGeometry?.push({start: undefined, end: undefined, diameter: undefined});
      return 1;
    } 
    else
    {
      return 0
    }
  }

  /*
  Function responsible for reseting all the data inputed and changed by the user in the steps - being it three or four, depending
  on the type entered by the caller of this function - since it's possible for the user to reset the internal and the external
  geometries
  */
  resetGeometry(type:string):number {

    if (type === "external")
    {
      this.process_config.productsExternalGeometry?.splice(0, this.process_config.productsExternalGeometry.length);
      return 1;
    }
    else if (type === "internal")
    {
      this.process_config.productsInternalGeometry?.splice(0, this.process_config.productsInternalGeometry.length);
      return 1;
    }
    else
    {
      return 0;
    }
  }

  /*
  Function responsible for removing an especific geometry setted or added by the user while in
  the step three or four
  It traks which geometry must be deleted accordingly to the index of the element that called the function,
  since the close button is a child element present in every geometry in the DOM
  */
  removeGeometry(type:string, idx: number):number {
    
    if (type === "external")
    {
      this.process_config.productsExternalGeometry?.splice(idx, 1);
      return 1;
    }
    else if (type === "internal")
    {
      this.process_config.productsInternalGeometry?.splice(idx, 1);
      return 1;
    }
    else
    {
      return 0;
    }
  }

  checkGeometries(geometry?:{start?: number, end?: number, diameter?: number}[]) {
    return geometry?.filter((el) => {
      return (el.start && el.end && el.diameter);
    }).length; 
  }

}
