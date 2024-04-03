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
import { MatExpansionModule } from '@angular/material/expansion';


export interface geometry {
  start: number;
  end: number;
  diameter: number;
}

export interface process {
  element: string, 
  preLength: number, 
  preDiameter: number, 
  condition: string, 
  material: string,
  productsExternalGeometry:geometry[],
  productsInternalGeometry:geometry[],
}

export interface parameters {
  rpm: number,
  machiningTime: number,
  metalRemotionRate: number,
}

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
    PanelComponent,
    MatExpansionModule,
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
  public process_config:process = {
    element: '',
    preLength: 0,
    preDiameter: 0,
    condition: '',
    material: '',
    productsExternalGeometry: [

    ],
    productsInternalGeometry: [

    ],
  };

  configTest:process = {
    element: 'flange',
    preLength: 300,
    preDiameter: 200,
    condition: 'boa',
    material: 'aço',
    productsExternalGeometry: [
      {
        start: 0, end: 10, diameter: 20, 
      },
  
      {
        start: 10, end: 30, diameter: 40, 
      },
  
      {
        start: 30, end: 100, diameter: 50, 
      },
    ],
    productsInternalGeometry: [

    ],
  }


  geometryTest:geometry[] = [
    {
      start: 0, end: 10, diameter: 20, 
    },

    {
      start: 10, end: 30, diameter: 40, 
    },

    {
      start: 30, end: 100, diameter: 50, 
    },
  ];

  insertTest:insert[] = [
    {
      iso: "CCMT 06 02 02", geometry: "PF", class: 4325, vc: 495, fn: 0.06, 
      ap: 0.25, material: "p", condition: "Boa", machine: "Coroturn 107"
    },

    {
      iso: "CCMT 06 08 02", geometry: "PF", class: 4225, vc: 595, fn: 0.16, 
      ap: 0.25, material: "p", condition: "Boa", machine: "Coroturn 107"
    },

    {
      iso: "CCMT 06 04 02", geometry: "PF", class: 4125, vc: 795, fn: 0.6, 
      ap: 0.25, material: "m", condition: "Boa", machine: "Coroturn 107"
    },

    {
      iso: "DCMT 11 T3 08", geometry: "MF", class: 2015, vc: 275, fn: 0.15, 
      ap: 0.40, material: "m", condition: "Boa", machine: "Coroturn 107"
    },

    {
      iso: "TCMT 11 03 08", geometry: "KF", class: 3225, vc: 240, fn: 0.13, 
      ap: 0.40, material: "k", condition: "Media", machine: "Coroturn 107"
    },

    {
      iso: "TCMT 11 03 08", geometry: "KF", class: 5225, vc: 540, fn: 1.3, 
      ap: 4.40, material: "k", condition: "Media", machine: "Coroturn 107"
    },
  ];

  insertFiltered(insert:insert[], processObj: process) {

    const material = processObj.material;
    let materialN = '';

    materialN = material === 'aço' ? 'p' : 
    material === 'aço inoxídavel' ? 'm' : 
    material === 'ferro fundido' ? 'k' : 
    material === 'superliga' ? 's' : '';

    const insertFiltered = insert.filter((el) => {
      return  el.condition.toLowerCase() == processObj.condition.toLowerCase()
      && el.material.toLowerCase() == materialN
    });
    return insertFiltered;
  }

  filtered:insert[] = this.insertFiltered(this.insertTest, this.configTest);

  insertFilter(insertArr:insert[], processObj: process):insert[] {

    const material = processObj.material;
    let materialN = '';

    materialN = material === 'aço' ? 'p' : 
    material === 'aço inoxídavel' ? 'm' : 
    material === 'ferro fundido' ? 'k' : 
    material === 'superliga' ? 's' : '';

    const insertFiltered = insertArr.filter((el) => {
      return (
        el.material.toLowerCase() === materialN.toLowerCase() 
        && 
        el.condition.toLowerCase() === processObj.condition.toLowerCase()
      );
    });
    return insertFiltered;
  }

  insertCalculator(insertArr:insert[], processObj: process, geometry: geometry):parameters[] {
    const parameters:parameters[] = [
      
    ];

    insertArr.forEach((el) => {
      const tempRpm:number = (1000 * el.vc)/(processObj.preDiameter * Math.PI);
      const tempMachiningTime:number = (geometry.end - geometry.start)/(el.fn * tempRpm);
      const tempMetalRemotionRate:number = el.fn * el.vc * el.ap;

      parameters.push({rpm: tempRpm, machiningTime: tempMachiningTime, metalRemotionRate: tempMetalRemotionRate})
    });

    return parameters;
  }

  parametersCalculated:parameters[] = this.insertCalculator(this.insertTest, this.configTest, this.geometryTest[1]);

  insertFiltrateThenCalculate(insert:insert[], processObj: process, geometry: geometry):[insert, parameters][] {
    const filtratedInserts:insert[] = this.insertFilter(insert, processObj);
    const parameters:parameters[] = this.insertCalculator(filtratedInserts, processObj, geometry);

    const insertsAndParameters:[insert, parameters][] = [

    ];

    filtratedInserts.forEach((el, idx) => {
      insertsAndParameters.push([el, parameters[idx]]);
    });

    return insertsAndParameters;
  }

  

  clickEvent() {
    const t = this.insertFiltrateThenCalculate(this.insertTest, this.configTest, this.configTest.productsExternalGeometry[1]);
    return t;
  }

  insertsAndParameters = this.insertFilter(this.insertTest, this.configTest);

  filtratedAndCalculated!:[insert, parameters][];

  loadInsertsAndParameters():void {
    this.filtratedAndCalculated = this.insertFiltrateThenCalculate(this.externalInsertData, this.process_config, this.geometryTest[0])
  }




  //ABAIXO CÓDIGO LIMPO, ACIMA TESTES

  @Input() externalInsertData!:insert[];

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
      this.process_config.productsExternalGeometry?.push({start: 0, end: 0, diameter: 0});
      return 1;
    }
    else if (type === "internal")
    {
      this.process_config.productsInternalGeometry?.push({start: 0, end: 0, diameter: 0});
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
      return (
          (el.start || el.start === 0) && (el.end || el.end === 0) && el.diameter
          && el.diameter > 0 && el.start != el.end && el.start >= 0 && el.end >= 0
        );
    }).length; 
  }

}
