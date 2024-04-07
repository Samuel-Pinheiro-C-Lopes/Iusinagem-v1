//Basic module for the component behavior, core for the Angular application
import { Component, Input } from '@angular/core';

//All the modules required for the component
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule, StepperOrientation } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { insert } from '../main.component';
import { PanelComponent } from '../panel/panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../tabs/tabs.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';


export interface geometry {
  start: number;
  end: number;
  diameter: number;
  insertsAndParameters?: [insert, parameters][];
  type: string;
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
    CommonModule,
    TabsComponent
    
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {

//RESPONSIVE STEPPER

  /*
  Uses the Observable interface to handle the observation
  of the media screen and the stepperOrientation attribute
  of the stepper
  It's used to make the stepper vertical whenever the screen is
  minor to 800px
  */
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

//RELEVANT DATA BELLOW

  /*
  Object responsible for saving all the data the user inputs in the stepper
  It has the element the user wants to make, it's length and diameter before the whole process,
  it's condition and material, and all the measurement changes aimed
  It's essential for the application since it's data will be used to determine the inserts,
  drills, and then, accordingly, determine all the variables within the calculations needed
  */
  public process_config:process = {
    element: 'flange',
    preLength: 300,
    preDiameter: 200,
    condition: 'difícil',
    material: 'aço',
    productsExternalGeometry: [
      {
        start: 0, end: 10, diameter: 20, type: 'externo'
      },
  
      {
        start: 10, end: 30, diameter: 40, type: 'externo'
      },
    ],
    productsInternalGeometry: [

    ],
  };

  /*
  The inserts for external machining
  inputed by the main component
  */
  @Input() externalInsertData!:insert[];

  /*
  The inserts for internal machining
  inputed by the main component
  */
  @Input() internalInsertData!:insert[];

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

//GEOMETRY FUNCTIONS BELLOW

  /*
  Function responsible for adding - pushing - a new geometry inside the array of external measurements inputed by the user.
  According to the type of button that called the function, a different array will have a push - since there is one
  for the external geometry and one for the internal geometry
  */
  addNewGeometry(type: string):number {
    if (type === "external") 
    {
      this.process_config.productsExternalGeometry?.push({start: 0, end: 0, diameter: 0, type: "externo"});
      return 1;
    }
    else if (type === "internal")
    {
      this.process_config.productsInternalGeometry?.push({start: 0, end: 0, diameter: 0, type: "interno"});
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

  /*
  Checks if the geometries have all of it's elements values inputed as expected, returning 0 if there isn't
  a single geometry with the determined conditions
  It's used in the @if block of the final step to assure the data inputed is correct
  */
  geometriesValid:[string[], boolean] = [[], false];

  checkGeometries(...geometries:geometry[][]):number {
    //console.log("CHECKGEOMETRIS CALLED !!!!")
    const booleanArr:boolean[] = [

    ];

    const errorMsgs:string[] = [

    ];

    geometries.forEach((geArr) => {

      const booleanArr0:boolean[] = [

      ];

      //console.log('GEOMETRY ARRAY: ', geArr)

      geArr.forEach((ge, idx) => {
        if 
          (
              ge.start >= 0 && ge.end > 0 &&
              ge.start < ge.end && ge.diameter >= 0 &&
              ge.diameter <= this.process_config.preDiameter &&
              ge.end <= this.process_config.preLength &&
              (!geArr[idx - 1] || ge.start >= geArr[idx-1].end) &&
              (ge.start != 0 || ge.end != 0 || ge.diameter != 0)
          )
        {
          //console.log('Geometry is true when', idx, ': ', ge);
          booleanArr0.push(true);
        }
        else
        {
          if (ge.start == 0 && ge.end == 0 && ge.diameter == 0) 
          {
            errorMsgs.push(`Em ${ge.type} o trecho ${idx} está vazio.`)
          }
          else if (geArr.length != 0) 
          {  
            if (ge.start <= 0) { errorMsgs.push(`Em ${ge.type} o início ${ge.start}mm é menor ou igual a 0.`); }
            if (ge.end <= 0) { errorMsgs.push(`Em ${ge.type} o final ${ge.end}mm é menor ou igual a 0.`); }
            if (ge.start > ge.end) { errorMsgs.push(`Em ${ge.type} o início ${ge.start}mm é maior que o final ${ge.end}mm.`); }
            if (ge.diameter > this.process_config.preDiameter) { errorMsgs.push(`Em ${ge.type} o diâmetro ${ge.diameter}mm é maior que o diâmetro pré-usinagem ${this.process_config.preDiameter}mm.`); }
            if (ge.end > this.process_config.preLength) { errorMsgs.push(`Em ${ge.type} o final ${ge?.end}mm é maior que o comprimento pré-usinagem ${this.process_config.preLength}mm.`); }
            if (geArr[idx-1]) {
              if (ge.start < geArr[idx-1].end) { errorMsgs.push(`Em ${ge.type} o início ${ge.start}mm é maior que o final ${ge.end}mm de seu trecho antecessor.`) }
            }
          }
        console.log('Geometry is false when', idx, ': ', ge);
        booleanArr0.push(false);
        }
      });
      
      if 
        (
          booleanArr0.every(bl => bl == true) || geArr.length === 0
        )
      {
        //console.log('GEOMETRY ARRAY IS TRUE WHEN: ', geArr);
        booleanArr.push(true);
      }
      else
      {
        //console.log('GEOMETRY ARRAY IS FALSE WHEN: ', geArr);
        booleanArr.push(false);
      }

    });
    
    if 
      (
        booleanArr.every(bl => bl == true) && 
        geometries.some(geArr => geArr.length != 0) && 
        this.checkDiameters(this.process_config.productsExternalGeometry, this.process_config.productsInternalGeometry)
      ) 
    { 
      this.geometriesValid[1] = true; 
      //console.log("ALL TRUE, HEHE") 
      return 1;
    }
    else 
    { 
      this.geometriesValid[1] = false;
        errorMsgs.forEach((err) => {
          this.geometriesValid[0].push(err);
        })
      //console.log("ALL FALSEEEE, HEHE") 
      return 0;
    }
  }

  /*
  checks if each geometry is filled or if the external
  geometry is higher than the internal
  It's called by the checkGeometries function
  */

  /*
        if 
        (
          !(booleanArr.every(bl => bl == true) && 
          geometries.some(geArr => geArr.length != 0))
        )
      {

  0-30 40 [30, 40]
  30-70 50 [70, 50]
  0-20 20 [20, 20]
  20-50 [50, 45]
  1- inicio que antecede esse começo
  2- fim que sucede o final 
  3 - comparar o diâmetro interno e os diâmetros contidos nesse trecho

  
  checkDiameters(external:geometry[], internal:geometry[]):boolean {
    const diameterMeasurementsExt:number[] = [

    ];
    const diameterMeasurementsInt:number[] = [

    ];

    let valid:boolean = true;

    external.forEach((el) => {
      diameterMeasurementsExt.push(el.diameter);
    });
    internal.forEach((el) => {
      diameterMeasurementsInt.push(el.diameter);
    });

    diameterMeasurementsExt.forEach((el, idx) => {
      if(el > diameterMeasurementsInt[idx] || !diameterMeasurementsInt[idx]) 
      {
        return 1;
      }
      else
      {
        valid = false;
        return 0;
      }
    })

    return valid;
  }
*/

  checkDiameters(external:geometry[], internal:geometry[]):boolean {
    let valid:boolean = true;
    const errMsgs:string[] = [

    ]

    internal.forEach((geoInt) => {

      external.filter((geoExt) => {

        return (geoExt.start <= geoInt.start && geoExt.end > geoInt.start) || (geoExt.end > geoInt.start && geoExt.start < geoInt.end);

      }).forEach((geo) => {

        if (geo.diameter <= geoInt.diameter) {
          errMsgs.push(`O diâmetro ${geo.diameter}mm do trecho ${geo.start}mm - ${geo.end}mm do ${geo.type} é menor ou igual ao diâmetro ${geoInt.diameter} do trecho ${geoInt.start}mm - ${geoInt.end}mm do ${geoInt.type}`);
          valid = false;
        }
        
      })
    })
    errMsgs.forEach((err) => {
      this.geometriesValid[0].push(err);
    });
    return valid;
  }


//INSERT AND PARAMETERS DATA TREATMENT BELLOW

  /*
  Filters the received inserts base on each material and condition, and
  the material and condition inputed in the processObj
  Returns and insert[] with only the inserts that matches the
  condition and material inputted by the user
  */
  insertFilter(insertArr:insert[], processObj: process):insert[] {

    /*
    Converts the material and condition obtained in the process obj to 
    ones that matches the inserts data
    */
    const material = processObj.material;
    const condition = processObj.condition;
    let materialN = '';
    let conditionN = '';

    materialN = material === 'aço' ? 'p' : 
    material === 'aço inoxidável' ? 'm' : 
    material === 'ferro fundido' ? 'k' : 
    material === 'superliga' ? 's' : '';

    conditionN = condition === 'boa' ? 'boa' : 
    condition === 'média' ? 'media' : 
    condition === 'difícil' ? 'dificil' : '';

    /*
    Filters the insertArr received as argument accordingly to the
    Material and Condition, declaring and initializating the
    insertFiltered const with it's insert[]
    */    
    const insertFiltered:insert[] = insertArr.filter((el) => {
      return (
        el.material.toLowerCase() === materialN.toLowerCase() 
        && 
        el.condition.toLowerCase() === conditionN.toLowerCase()
      );
    });

    return insertFiltered;
  }

  /*
  Calculates the parameter for each insert based on the geometry and the processObj
  returning a parameters[] with each index matching the index of the insertArr received
  Used to obtain the parameters for all the inserts accordingly with the geometries inputed
  by the user and the equations for each variable 
  */
  insertCalculator(insertArr:insert[], processObj: process, geometry: geometry):parameters[] {

    //parameters[] that will have all the parameters
    const parameters:parameters[] = [
      
    ];

    /*
    For each insert in the insert arr the parameters will receive a object of type parameter
    with rpm, machiningTime, metalRemotionRate matched with each insert of the respective
    insert index
    */
    insertArr.forEach((el) => {
      const tempRpm:number = (1000 * el.vc)/(processObj.preDiameter * Math.PI);
      const tempMachiningTime:number = (geometry.end - geometry.start)/(el.fn * tempRpm);
      const tempMetalRemotionRate:number = el.fn * el.vc * el.ap;

      parameters.push({rpm: tempRpm, machiningTime: tempMachiningTime, metalRemotionRate: tempMetalRemotionRate})
    });

    return parameters;
  }

  /*
  Function whose purpose is to call both the insertFilter and insertCalculator
  and return an array of arrays containg insert and paraters with respective indexes
  */
  insertFiltrateThenCalculate(insert:insert[], processObj: process, geometry: geometry):[insert, parameters][] {
    
    //One receives the filtered inserts and the other a array of parameters
    const filtratedInserts:insert[] = this.insertFilter(insert, processObj);
    const parameters:parameters[] = this.insertCalculator(filtratedInserts, processObj, geometry);

    //variable that will containt the returned data
    const insertsAndParameters:[insert, parameters][] = [

    ];

    //pushing the elements based on the actual index
    filtratedInserts.forEach((el, idx) => {
      insertsAndParameters.push([el, parameters[idx]]);
    });

    return insertsAndParameters;
  }

  /*
  Function meant to map each geometry from the process_config object
  to attribute the respective filtrated and calculated data from the
  functions above
  */
  fillGeometriesInsertsAndParameters():void {
    
    /*
    The external geometry will receive it's data after
    the externalInsertData is filtrated, and the filtrated
    data is used altogether with the geometry to determine
    the paramaters of machining in each case
    */
    this.process_config.productsExternalGeometry.map((geometry) => {
      geometry.insertsAndParameters = this.insertFiltrateThenCalculate(
        this.externalInsertData, this.process_config, geometry);
    });

    /*
    The internal geometry will receive it's data after
    the internalInsertData is filtrated, and the filtrated
    data is used altogether with the geometry to determine
    the paramaters of machining in each case
    */
    this.process_config.productsInternalGeometry.map((geometry) => {
      geometry.insertsAndParameters = this.insertFiltrateThenCalculate(
        this.internalInsertData, this.process_config, geometry);
    });
  }

  /*
  Sets every geometry.insertsAndParameters in the process_config object to undefined, 
  unfilling all the data used by children components and function above
  It's meant to be a way to actualize the data that is outputed in the final step
  each time the user changes something, being called by the selectionChange()
  function along side with the fillGeometriesInsertsAndParameters()
  */
  unfillGeometriesInsertsAndParameters():void {
    this.process_config.productsExternalGeometry.map((geometry) => {
      geometry.insertsAndParameters = undefined;
    });

    this.process_config.productsInternalGeometry.map((geometry) => {
      geometry.insertsAndParameters = undefined;
    });
  }

  /* 
  Whenever the user changes the step this function is called and, 
  calling both fill and unfill functions, the data that's meant to 
  be outputed in the final step is updated
  */
  selectionChange() {
    this.geometriesValid[0].splice(0, this.geometriesValid[0].length);
    this.tabDataCreator(this.process_config.productsExternalGeometry, this.process_config.productsInternalGeometry);
    this.unfillGeometriesInsertsAndParameters();
    this.fillGeometriesInsertsAndParameters();
    this.checkGeometries(this.process_config.productsExternalGeometry, this.process_config.productsInternalGeometry);
  }


//DATA MERGER
  /*
  Function that receiver n geometries array as an array of them, later 
  filtrating them - eliminating the ones that aren't valid - has no length,
  no inserts and parameters and end equal to zero
  */
  tabData:geometry[][] = [

  ];

  tabDataCreator(...geometriesArr: geometry[][]):geometry[][] {
    const filteredArr = geometriesArr.filter((el) => {
      return el.filter((el) => {
        el.end != 0 &&  el.insertsAndParameters
      }) && el.length;
    })
    this.tabData = filteredArr;
    return filteredArr;
  };

}
