import { Component } from '@angular/core';

import { MatDivider } from '@angular/material/divider';


import { StepperComponent } from './stepper/stepper.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CarouselComponent } from './carousel/carousel.component';

/*
data type for the inserts arrays that will be treated by the application
and used to provide the user the best tools and it's parameters and
specific variables according to the situation inputed in the stepper component
*/
export interface insert {
  iso: string,
  geometry: string,
  class: number,
  vc: number,
  fn: number,
  ap: number,
  material: string,
  condition: string,
  operation: string,
  machine: string,
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StepperComponent, CatalogComponent, MatDivider, CarouselComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class AppMainComponent {

  //data for the external machining inserts - Sandvik Coromant
external:insert[] = [
  //T-Max - pág 18 -> 20

    //OPERAÇÕES DE ACABAMENTO***

     //Aços******

      //boas condições******
      {
        iso: "CNMG 12 04 04", geometry: "PF", class: 4315, vc: 530, fn: 0.15, ap: 0.40, 
        material: "p", condition: "Boa", operation: 'Acabamento', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "PF", class: 4315, vc: 530, fn: 0.15, ap: 0.40, 
        material: "p", condition: "Boa", operation: 'Acabamento', machine: "T-Max"
      },

      //medias condições******
      {
        iso: "CNMG 12 04 04", geometry: "PF", class: 4325, vc: 440, fn: 0.20, ap: 0.40, 
        material: "p", condition: "Media", operation: 'Acabamento', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "PF", class: 4325, vc: 440, fn: 0.15, ap: 0.40, 
        material: "p", condition: "Media", operation: 'Acabamento', machine: "T-Max"
      },

      //difíceis condições******
      {
        iso: "CNMG 12 04 04", geometry: "PM", class: 4335, vc: 250, fn: 0.20, ap: 3.00, 
        material: "p", condition: "Dificil", operation: 'Acabamento', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "PM", class: 4335, vc: 250, fn: 0.20, ap: 3.00, 
        material: "p", condition: "Dificil", operation: 'Acabamento', machine: "T-Max"
      },

     //Aços Inoxidáveis*****

      //boas condições*****
      {
        iso: "CNMG 12 04 04", geometry: "MF", class: 2015, vc: 275, fn: 0.15, ap: 0.40, 
        material: "m", condition: "Boa", operation: 'Acabamento', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "MF", class: 2015, vc: 275, fn: 0.15, ap: 0.40, 
        material: "m", condition: "Boa", operation: 'Acabamento', machine: "T-Max"
      },

      //medias condições*****
      {
        iso: "CNMG 12 04 04", geometry: "MF", class: 2220, vc: 255, fn: 0.15, ap: 0.40, 
        material: "m", condition: "Media", operation: 'Acabamento', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "MF", class: 2220, vc: 225, fn: 0.15, ap: 0.40, 
        material: "m", condition: "Media", operation: 'Acabamento', machine: "T-Max"
      },

      //difíceis condições*****
      {
        iso: "CNMG 12 04 04", geometry: "MF", class: 2025, vc: 215, fn: 0.15, ap: 0.40, 
        material: "m", condition: "Dificil", operation: 'Acabamento', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "MF", class: 2025, vc: 215, fn: 0.15, ap: 0.40, 
        material: "m", condition: "Dificil", operation: 'Acabamento', machine: "T-Max"
      },

     //Ferro fundido********

      //boas condições********
      {
        iso: "CNMG 12 04 04", geometry: "KF", class: 3210, vc: 345, fn: 0.15, ap: 0.50, 
        material: "k", condition: "Boa", operation: 'Acabamento', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "KF", class: 3210, vc: 345, fn: 0.15, ap: 0.50, 
        material: "k", condition: "Boa", operation: 'Acabamento', machine: "T-Max"
      },

      //médias condições ****
      {
        iso: "CNMG 12 04 04", geometry: "KF", class: 3225, vc: 235, fn: 0.15, ap: 0.50, 
        material: "k", condition: "Media", operation: 'Acabamento', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "KF", class: 3225, vc: 235, fn: 0.15, ap: 0.50, 
        material: "k", condition: "Media", operation: 'Acabamento', machine: "T-Max"
      },

      //difíceis condições ****
      {
        iso: "CNMG 12 04 04", geometry: "KF", class: 3225, vc: 235, fn: 0.15, ap: 0.50, 
        material: "k", condition: "Dificil", operation: 'Acabamento', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "KF", class: 3225, vc: 235, fn: 0.15, ap: 0.50, 
        material: "k", condition: "Dificil", operation: 'Acabamento', machine: "T-Max"
      },

     //superligas******

      //boas condições********
      {
        iso: "CNMG 12 04 04", geometry: "SF", class: 1105, vc: 80, fn: 0.12, ap: 0.40, 
        material: "s", condition: "Boa", operation: 'Acabamento', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "SF", class: 1105, vc: 80, fn: 0.12, ap: 0.40, 
        material: "s", condition: "Boa", operation: 'Acabamento', machine: "T-Max"
      },

      //médias condições********
      {
        iso: "CNMG 12 04 04", geometry: "SF", class: 1115, vc: 65, fn: 0.12, ap: 0.40, 
        material: "s", condition: "Media", operation: 'Acabamento', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "SF", class: 1115, vc: 65, fn: 0.12, ap: 0.40, 
        material: "s", condition: "Media", operation: 'Acabamento', machine: "T-Max"
      },

      //difíceis condições********
      {
        iso: "CNMG 12 04 04", geometry: "SF", class: 1125, vc: 35, fn: 0.12, ap: 0.40, 
        material: "s", condition: "Dificil", operation: 'Acabamento', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "SF", class: 1125, vc: 35, fn: 0.12, ap: 0.40, 
        material: "s", condition: "Dificil", operation: 'Acabamento', machine: "T-Max"
      },

    //OPERAÇÕES MÉDIAS*****
    
     //Aço******

      //boas condições******
      {
        iso: "CNMG 12 04 04", geometry: "PM", class: 4315, vc: 490, fn: 0.20, ap: 3.00, 
        material: "p", condition: "Boa", operation: 'Media', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 08", geometry: "PM", class: 4315, vc: 430, fn: 0.30, ap: 2.50, 
        material: "p", condition: "Boa", operation: 'Media', machine: "T-Max"
      },

      //médias condições******
      {
        iso: "CNMG 12 04 04", geometry: "PM", class: 4325, vc: 0.20, fn: 0.20, ap: 3.00, 
        material: "p", condition: "Media", operation: 'Media', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 08", geometry: "PM", class: 4325, vc: 355, fn: 0.30, ap: 3.00, 
        material: "p", condition: "Media", operation: 'Media', machine: "T-Max"
      },

      //difíceis condições******
      {
        iso: "CNMG 12 04 04", geometry: "PM", class: 4335, vc: 250, fn: 0.20, ap: 3.00, 
        material: "p", condition: "Dificil", operation: 'Media', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 08", geometry: "PM", class: 4325, vc: 355, fn: 0.30, ap: 3.00, 
        material: "p", condition: "Dificil", operation: 'Media', machine: "T-Max"
      },
    
     //Aço Inoxidável****

      //boas condições********
      {
        iso: "CNMG 12 04 08", geometry: "MM", class: 2220, vc: 210, fn: 0.25, ap: 3.00, 
        material: "m", condition: "Boa", operation: 'Media', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 08", geometry: "MM", class: 2220, vc: 210, fn: 0.25, ap: 3.00, 
        material: "m", condition: "Boa", operation: 'Media', machine: "T-Max"
      },

      //médias condições********
      {
        iso: "CNMG 12 04 08", geometry: "MM", class: 2025, vc: 180, fn: 0.25, ap: 3.00, 
        material: "m", condition: "Media", operation: 'Media', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 08", geometry: "MM", class: 2025, vc: 180, fn: 0.25, ap: 3.00, 
        material: "m", condition: "Media", operation: 'Media', machine: "T-Max"
      },

      //difíceis condições********
      {
        iso: "CNMG 12 04 08", geometry: "MM", class: 2035, vc: 160, fn: 0.25, ap: 3.00, 
        material: "m", condition: "Dificil", operation: 'Media', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 08", geometry: "MM", class: 2035, vc: 160, fn: 0.25, ap: 3.00, 
        material: "m", condition: "Dificil", operation: 'Media', machine: "T-Max"
      },

     //Ferro fundido******

      //boas condições******
      {
        iso: "CNMG 12 04 08", geometry: "KM", class: 3210, vc: 280, fn: 0.35, ap: 3.00, 
        material: "k", condition: "Boa", operation: 'Media', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 08", geometry: "KM", class: 3210, vc: 280, fn: 0.35, ap: 2.50, 
        material: "k", condition: "Boa", operation: 'Media', machine: "T-Max"
      },

      //médias condições******
      {
        iso: "CNMG 12 04 08", geometry: "KM", class: 3210, vc: 280, fn: 0.35, ap: 3.00, 
        material: "k", condition: "Media", operation: 'Media', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 08", geometry: "KM", class: 3210, vc: 280, fn: 0.35, ap: 2.50, 
        material: "k", condition: "Media", operation: 'Media', machine: "T-Max"
      },

      //difíceis condições******
      {
        iso: "CNMG 12 04 08", geometry: "KM", class: 3225, vc: 190, fn: 0.35, ap: 3.00, 
        material: "k", condition: "Dificil", operation: 'Media', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 08", geometry: "KM", class: 3225, vc: 190, fn: 0.35, ap: 2.50, 
        material: "k", condition: "Dificil", operation: 'Media', machine: "T-Max"
      },

     //Superliga******

      //boas condições********
      {
        iso: "CNMG 12 04 04", geometry: "SM", class: 1105, vc: 70, fn: 0.20, ap: 1.50, 
        material: "s", condition: "Boa", operation: 'Media', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "SM", class: 1105, vc: 70, fn: 0.20, ap: 1.50, 
        material: "s", condition: "Boa", operation: 'Media', machine: "T-Max"
      },

      //médias condições*****
      {
        iso: "CNMG 12 04 04", geometry: "SM", class: 1115, vc: 55, fn: 0.20, ap: 1.50, 
        material: "s", condition: "Media", operation: 'Media', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "SM", class: 1115, vc: 55, fn: 0.20, ap: 1.50, 
        material: "s", condition: "Media", operation: 'Media', machine: "T-Max"
      },

      //difíceis condições*****
      {
        iso: "CNMG 12 04 04", geometry: "SM", class: 1125, vc: 32, fn: 0.20, ap: 1.50, 
        material: "s", condition: "Dificil", operation: 'Media', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 04", geometry: "SM", class: 1125, vc: 32, fn: 0.20, ap: 1.50, 
        material: "s", condition: "Dificil", operation: 'Media', machine: "T-Max"
      },
    
    //OPERAÇÕES DE DESBASTE*****

     //Aço************
      
      //boas condições******
      {
        iso: "CNMG 12 04 08", geometry: "PR", class: 4315, vc: 405, fn: 0.35, ap: 4.00, 
        material: "p", condition: "Boa", operation: 'Desbaste', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 08", geometry: "PR", class: 4315, vc: 405, fn: 0.35, ap: 4.00, 
        material: "p", condition: "Boa", operation: 'Desbaste', machine: "T-Max"
      },

      //médias condições******
      {
        iso: "CNMG 12 04 08", geometry: "PR", class: 4325, vc: 335, fn: 0.35, ap: 4.00, 
        material: "p", condition: "Media", operation: 'Desbaste', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 08", geometry: "PR", class: 4325, vc: 335, fn: 0.35, ap: 4.00, 
        material: "p", condition: "Media", operation: 'Desbaste', machine: "T-Max"
      },

      //difíceis condições******
      {
        iso: "CNMG 12 04 08", geometry: "PR", class: 4335, vc: 200, fn: 0.35, ap: 4.00, 
        material: "p", condition: "Dificil", operation: 'Desbaste', machine: "T-Max"
      },

      {
        iso: "DNMG 15 06 08", geometry: "PR", class: 4335, vc: 200, fn: 0.40, ap: 4.00, 
        material: "p", condition: "Dificil", operation: 'Desbaste', machine: "T-Max"
      },

     //Aço Inoxidável************
      
      //boas condições******
      {
        iso: "CNMG 12 04 08", geometry: "MR", class: 2220, vc: 195, fn: 0.30, ap: 3.00, 
        material: "m", condition: "Boa", operation: 'Desbaste', machine: "T-Max"
      }, 

      {
        iso: "DNMG 15 06 08", geometry: "MR", class: 2220, vc: 195, fn: 0.30, ap: 3.00, 
        material: "m", condition: "Boa", operation: 'Desbaste', machine: "T-Max"
      },

      //médias condições******
      {
        iso: "CNMG 12 04 08", geometry: "MR", class: 2025, vc: 165, fn: 0.30, ap: 3.00, 
        material: "m", condition: "Media", operation: 'Desbaste', machine: "T-Max"
      }, 

      {
        iso: "DNMG 15 06 08", geometry: "MR", class: 2025, vc: 165, fn: 0.30, ap: 3.00, 
        material: "m", condition: "Media", operation: 'Desbaste', machine: "T-Max"
      },

      //difíceis condições******
      {
        iso: "CNMG 12 04 08", geometry: "MR", class: 2035, vc: 145, fn: 0.30, ap: 3.00, 
        material: "m", condition: "Dificil", operation: 'Desbaste', machine: "T-Max"
      }, 

      {
        iso: "DNMG 15 06 08", geometry: "MR", class: 2035, vc: 145, fn: 0.30, ap: 3.00, 
        material: "m", condition: "Dificil", operation: 'Desbaste', machine: "T-Max"
      },

     //Ferro Fundido************
      
      //boas condições******
      {
        iso: "CNMG 12 04 08", geometry: "KR", class: 3210, vc: 275, fn: 0.38, ap: 3.50, 
        material: "k", condition: "Boa", operation: 'Desbaste', machine: "T-Max"
      }, 

      {
        iso: "DNMG 15 06 08", geometry: "KR", class: 3210, vc: 285, fn: 0.34, ap: 3.50, 
        material: "k", condition: "Boa", operation: 'Desbaste', machine: "T-Max"
      }, 

      //médias condições******
      {
        iso: "CNMG 12 04 08", geometry: "KR", class: 3210, vc: 275, fn: 0.38, ap: 3.50, 
        material: "k", condition: "Media", operation: 'Desbaste', machine: "T-Max"
      }, 

      {
        iso: "DNMG 15 06 08", geometry: "KR", class: 3210, vc: 285, fn: 0.34, ap: 3.50, 
        material: "k", condition: "Media", operation: 'Desbaste', machine: "T-Max"
      },
      
      //difíceis condições******
      {
        iso: "CNMG 12 04 08", geometry: "KR", class: 3225, vc: 185, fn: 0.38, ap: 3.50, 
        material: "k", condition: "Dificil", operation: 'Desbaste', machine: "T-Max"
      }, 

      {
        iso: "DNMG 15 06 08", geometry: "KR", class: 3225, vc: 195, fn: 0.34, ap: 3.50, 
        material: "k", condition: "Dificil", operation: 'Desbaste', machine: "T-Max"
      }, 

     //superliga************
      
      //boas condições******
      {
        iso: "CNMG 12 04 08", geometry: "SMR", class: 1105, vc: 50, fn: 0.30, ap: 2.00, 
        material: "s", condition: "Boa", operation: 'Desbaste', machine: "T-Max"
      }, 
      {
        iso: "DNMG 15 06 08", geometry: "SMR", class: 1105, vc: 70, fn: 0.20, ap: 1.50, 
        material: "s", condition: "Boa", operation: 'Desbaste', machine: "T-Max"
      },   

      //médias condições******
      {
        iso: "CNMG 12 04 08", geometry: "SMR", class: 1115, vc: 40, fn: 0.30, ap: 2.00, 
        material: "s", condition: "Media", operation: 'Desbaste', machine: "T-Max"
      }, 
      {
        iso: "DNMG 15 06 08", geometry: "SMR", class: 1115, vc: 55, fn: 0.20, ap: 1.50, 
        material: "s", condition: "Media", operation: 'Desbaste', machine: "T-Max"
      },   

      //difíceis condições******
      {
        iso: "CNMG 12 04 08", geometry: "SMR", class: 1125, vc: 25, fn: 0.30, ap: 2.00, 
        material: "s", condition: "Dificil", operation: 'Desbaste', machine: "T-Max"
      }, 
      {
        iso: "DNMG 15 06 08", geometry: "SMR", class: 1125, vc: 32, fn: 0.20, ap: 1.50, 
        material: "s", condition: "Dificil", operation: 'Desbaste', machine: "T-Max"
      },   

    
      
];

  //data for the internal machining
  internal:insert[] = [
   //Coroturn107 para aços - pág 11 -> 13****

    // ACABAMENTO***
      //boas condições****
      {
        iso: "CCMT 06 02 02", geometry: "PF", class: 4325, vc: 495, fn: 0.06, ap: 0.25, 
        material: "p", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "CCMT 09 T3 02", geometry: "PF", class: 4325, vc: 485, fn: 0.08, ap: 0.25, 
        material: "p", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "CCMT 09 T3 08", geometry: "PF", class: 4315, vc: 530, fn: 0.15, ap: 0.40, 
        material: "p", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"},

      {
        iso: "DCMT 07 02 02", geometry: "PF", class: 4325, vc: 495, fn: 0.06, ap: 0.25, 
        material: "p", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"},

      {
        iso: "DCMT 11 T3 02", geometry: "PF", class: 4325, vc: 485, fn: 0.08, ap: 0.25, 
        material: "p", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "DCMT 11 T3 08", geometry: "PF", class: 4315, vc: 530, fn: 0.15, ap: 0.40, 
        material: "p", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "TCMT 09 02 02", geometry: "PF", class: 4325, vc: 495, fn: 0.06, ap: 0.25, 
        material: "p", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "TCMT 11 03 02", geometry: "PF", class: 4325, vc: 490, fn: 0.07, ap: 0.25, 
        material: "p", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },
      
      {
        iso: "TCMT 11 03 08", geometry: "PF", class: 4315, vc: 550, fn: 0.13, ap: 0.40, 
        material: "p", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "CCMT 06 02 08", geometry: "PM", class: 4315, vc: 560, fn: 0.11, ap: 1.20, 
        material: "p", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },

      //médias condições*****
      {
        iso: "CCMT 09 T3 08", geometry: "PF", class: 4325, vc: 440, fn: 0.15, ap: 0.40, 
        material: "p", condition: "Media", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "DCMT 11 T3 08", geometry: "PF", class: 4325, vc: 440, fn: 0.15, ap: 0.40, 
        material: "p", condition: "Media", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "TCMT 11 03 08", geometry: "PF", class: 4325, vc: 450, fn: 0.13, ap: 0.40, 
        material: "p", condition: "Media", operation: 'Acabamento', machine: "Coroturn 107"
      },

      //difíceis condições****
      {
        iso: "CCMT 09 T3 08", geometry: "PM", class: 4335, vc: 250, fn: 0.20, ap: 1.70, 
        material: "p", condition: "Dificil", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "DCMT 11 T3 08", geometry: "PM", class: 4335, vc: 250, fn: 0.20, ap: 1.70, 
        material: "p", condition: "Dificil", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "TCMT 11 03 08", geometry: "Pm", class: 4335, vc: 265, fn: 0.17, ap: 1.20, 
        material: "p", condition: "Dificil", operation: 'Acabamento', machine: "Coroturn 107"
      },

     //Coroturn107 para aços inóx - pág 11 -> 13*****

      //boas condições****
      {
        iso: "CCMT 09 T3 08", geometry: "MF", class: 2015, vc: 275, fn: 0.15, ap: 0.40, 
        material: "m", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "DCMT 11 T3 08", geometry: "MF", class: 2015, vc: 275, fn: 0.15, ap: 0.40, 
        material: "m", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "TCMT 11 03 08", geometry: "MF", class: 2015, vc: 285, fn: 0.13, ap: 0.40, 
        material: "m", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },
  
      //médias condições*****
      {
        iso: "CCMT 09 T3 08", geometry: "MF", class: 2220, vc: 255, fn: 0.15, ap: 0.40, 
        material: "m", condition: "Media", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "DCMT 11 T3 08", geometry: "MF", class: 2220, vc: 255, fn: 0.15, ap: 0.40, 
        material: "m", condition: "Media", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "TCMT 11 03 08", geometry: "MF", class: 1115, vc: 235, fn: 0.13, ap: 0.40, 
        material: "m", condition: "Media", operation: 'Acabamento', machine: "Coroturn 107"
      },
  
      //difíceis condições****
      {
        iso: "CCMT 09 T3 08", geometry: "MM", class: 2025, vc: 195, fn: 0.20, ap: 1.70, 
        material: "m", condition: "Dificil", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "DCMT 11 T3 08", geometry: "MM", class: 2025, vc: 195, fn: 0.20, ap: 1.70, 
        material: "m", condition: "Dificil", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "TCMT 11 03 08", geometry: "MM", class: 2015, vc: 265, fn: 0.17, ap: 1.20, 
        material: "m", condition: "Dificil", operation: 'Acabamento', machine: "Coroturn 107"
      },

    //Coroturn107 para ferro fundido - pág 11 -> 13*****

      //boas condições*****
      {
        iso: "CCMT 09 T3 08", geometry: "KF", class: 3210, vc: 360, fn: 0.11, ap: 0.30, 
        material: "k", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "DCMT 11 T3 08", geometry: "KF", class: 3210, vc: 345, fn: 0.15, ap: 0.40, 
        material: "k", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "TCMT 11 03 08", geometry: "KF", class: 3210, vc: 355, fn: 0.13, ap: 0.40, 
        material: "k", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"
      },

      //médias condições*****
      {
        iso: "CCMT 09 T3 08", geometry: "KF", class: 3225, vc: 235, fn: 0.15, ap: 0.40, 
        material: "k", condition: "Media", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "DCMT 11 T3 08", geometry: "KF", class: 3225, vc: 235, fn: 0.15, ap: 0.40, 
        material: "k", condition: "Media", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "TCMT 11 03 08", geometry: "KF", class: 3225, vc: 240, fn: 0.13, ap: 0.40, 
        material: "k", condition: "Media", operation: 'Acabamento', machine: "Coroturn 107"
      },

      //difíceis condições*****
      {
        iso: "CCMT 09 T3 08", geometry: "KM", class: 3225, vc: 225, fn: 0.20, ap: 1.70, 
        material: "k", condition: "Dificil", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "DCMT 11 T3 08", geometry: "KM", class: 3225, vc: 225, fn: 0.20, ap: 1.70, 
        material: "k", condition: "Dificil", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "TCMT 11 03 08", geometry: "KM", class: 3225, vc: 230, fn: 0.17, ap: 1.20, 
        material: "k", condition: "Dificil", operation: 'Acabamento', machine: "Coroturn 107"
      },
    
    //Coroturn107 para superliga*****

      //boas condições*****
      {
        iso: "CCGT 09 T3 08", geometry: "UM", class: 1105, vc: 80, fn: 0.14, ap: 1.25, 
        material: "s", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"},


      {
        iso: "DCGT 11 T3 08", geometry: "UM", class: 1105, vc: 80, fn: 0.14, ap: 1.25, 
        material: "s", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"},


      {
        iso: "TCGT 11 03 08", geometry: "UM", class: 1115, vc: 65, fn: 0.14, ap: 1.25, 
        material: "s", condition: "Boa", operation: 'Acabamento', machine: "Coroturn 107"},

        
      //médias condições*****
      {
        iso: "CCGT 09 T3 08", geometry: "UM", class: 1105, vc: 65, fn: 0.14, ap: 1.25, 
        material: "s", condition: "Media", operation: 'Acabamento', machine: "Coroturn 107"}
        ,

      {
        iso: "DCGT 11 T3 08", geometry: "UM", class: 1105, vc: 65, fn: 0.14, ap: 1.25, 
        material: "s", condition: "Media", operation: 'Acabamento', machine: "Coroturn 107"}
        ,

      {
        iso: "TCGT 11 03 08", geometry: "UM", class: 1115, vc: 65, fn: 0.14, ap: 1.25, 
        material: "s", condition: "Media", operation: 'Acabamento', machine: "Coroturn 107"}
        ,
  
      //difíceis condições*****
      {
        iso: "CCGT 09 T3 08", geometry: "UM", class: 1125, vc: 35, fn: 0.14, ap: 1.25, 
        material: "s", condition: "Dificil", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "DCGT 11 T3 08", geometry: "UM", class: 1125, vc: 35, fn: 0.14, ap: 1.25, 
        material: "s", condition: "Dificil", operation: 'Acabamento', machine: "Coroturn 107"
      },

      {
        iso: "TCGT 11 03 08", geometry: "UM", class: 1125, vc: 35, fn: 0.14, ap: 1.25, 
        material: "s", condition: "Dificil", operation: 'Acabamento', machine: "Coroturn 107"
      },
    
  //OPERAÇÃO MÉDIA********
  
    //Para aços:*****   

      //boas condições*****
      {
        iso: "CCMT 06 02 04", geometry: "PM", class: 4315, vc: 560, fn: 0.11, ap: 1.20, 
        material: "p", condition: "Boa", operation: 'Media', machine: "Coroturn 107"
      },

      {
        iso: "DCMT 07 02 04", geometry: "PM", class: 4315, vc: 560, fn: 0.11, ap: 1.20, 
        material: "p", condition: "Boa", operation: 'Media', machine: "Coroturn 107"
      },

      //condições médias*****
      {
        iso: "CCMT 06 02 04", geometry: "PM", class: 4325, vc: 465, fn: 0.11, ap: 1.20, 
        material: "p", condition: "Media", operation: 'Media', machine: "Coroturn 107"
      },

      {
        iso: "DCMT 07 02 04", geometry: "PM", class: 4325, vc: 465, fn: 0.11, ap: 1.20, 
        material: "p", condition: "Media", operation: 'Media', machine: "Coroturn 107"
      },

      //condições difíceis*****
      {
        iso: "CCMT 06 02 04", geometry: "PM", class: 4335, vc: 300, fn: 0.11, ap: 1.20, 
        material: "p", condition: "Dificil", operation: 'Media', machine: "Coroturn 107"
      },

      {
        iso: "DCMT 07 02 04", geometry: "PM", class: 4335, vc: 300, fn: 0.11, ap: 1.20, 
        material: "p", condition: "Dificil", operation: 'Media', machine: "Coroturn 107"
      },
    
      //Para aços inoxidáveis*****

        //condições boas*******
        {
          iso: "CCMT 06 02 04", geometry: "MM", class: 2015, vc: 295, fn: 0.11, ap: 1.20, 
          material: "m", condition: "Boa", operation: 'Media', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 07 02 04", geometry: "MM", class: 2020, vc: 280, fn: 0.11, ap: 1.20, 
          material: "m", condition: "Boa", operation: 'Media', machine: "Coroturn 107"
        },

        //condições médias*******
        {
          iso: "CCMT 06 02 04", geometry: "MM", class: 1115, vc: 240, fn: 0.11, ap: 1.20, 
          material: "m", condition: "Media", operation: 'Media', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 07 02 04", geometry: "MM", class: 2025, vc: 235, fn: 0.11, ap: 1.20, 
          material: "m", condition: "Media", operation: 'Media', machine: "Coroturn 107"
        },

        //condições difíceis*******
        {
          iso: "CCMT 06 02 04", geometry: "MM", class: 1125, vc: 200, fn: 0.11, ap: 1.20, 
          material: "m", condition: "Dificil", operation: 'Media', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 07 02 04", geometry: "MM", class: 2035, vc: 210, fn: 0.11, ap: 1.20, 
          material: "m", condition: "Dificil", operation: 'Media', machine: "Coroturn 107"
        },

      //Para ferro fundido******

        //boas condições*****
        {
          iso: "CCMT 06 02 04", geometry: "KM", class: 3210, vc: 360, fn: 0.11, ap: 1.20, 
          material: "k", condition: "Boa", operation: 'Media', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 07 02 04", geometry: "KM", class: 3210, vc: 360, fn: 0.11, ap: 1.20, 
          material: "k", condition: "Boa", operation: 'Media', machine: "Coroturn 107"
        },

        //médias condições*****
        {
          iso: "CCMT 06 02 04", geometry: "KM", class: 3210, vc: 360, fn: 0.11, ap: 1.20, 
          material: "k", condition: "Media", operation: 'Media', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 07 02 04", geometry: "KM", class: 3210, vc: 360, fn: 0.11, ap: 1.20, 
          material: "k", condition: "Media", operation: 'Media', machine: "Coroturn 107"
        },

        //difíceis condições*****
        {
          iso: "CCMT 06 02 04", geometry: "KM", class: 3225, vc: 245, fn: 0.11, ap: 1.20, 
          material: "k", condition: "Dificil", operation: 'Media', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 07 02 04", geometry: "KM", class: 3225, vc: 245, fn: 0.11, ap: 1.20, 
          material: "k", condition: "Dificil", operation: 'Media', machine: "Coroturn 107"
        },

      //para superligas******

        //boas condições*****
        {
          iso: "CCMT 06 02 02", geometry: "MF", class: 1105, vc: 75, fn: 0.04, ap: 0.25, 
          material: "s", condition: "Boa", operation: 'Media', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 07 02 02", geometry: "MF", class: 1105, vc: 75, fn: 0.04, ap: 0.25, 
          material: "s", condition: "Boa", operation: 'Media', machine: "Coroturn 107"
        },

        //Medias condições*****
        {
          iso: "CCMT 06 02 02", geometry: "MF", class: 1115, vc: 60, fn: 0.04, ap: 0.25, 
          material: "s", condition: "Media", operation: 'Media', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 07 02 02", geometry: "MF", class: 1115, vc: 60, fn: 0.04, ap: 0.25, 
          material: "s", condition: "Media", operation: 'Media', machine: "Coroturn 107"
        },

        //Difíceis condições*****
        {
          iso: "CCMT 06 02 02", geometry: "MF", class: 1125, vc: 35, fn: 0.04, ap: 0.25, 
          material: "s", condition: "Dificil", operation: 'Media', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 07 02 02", geometry: "MF", class: 1125, vc: 35, fn: 0.04, ap: 0.25, 
          material: "s", condition: "Dificil", operation: 'Media', machine: "Coroturn 107"
        },
  
    //OPERAÇÃO DE DESBASTE******

      //Para aços ******

        //condições boas *******
        {
          iso: "CCMT 06 02 08", geometry: "PR", class: 4315, vc: 500, fn: 0.19, ap: 1.60, 
          material: "p", condition: "Boa", operation: 'Desbaste', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 11 T3 08", geometry: "PR", class: 4315, vc: 460, fn: 0.25, ap: 2.00, 
          material: "p", condition: "Boa", operation: 'Desbaste', machine: "Coroturn 107"
        },

        //condições médias *******
        {
          iso: "CCMT 06 02 08", geometry: "PR", class: 4325, vc: 410, fn: 0.19, ap: 1.60, 
          material: "p", condition: "Media", operation: 'Desbaste', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 11 T3 08", geometry: "PM", class: 4325, vc: 405, fn: 0.20, ap: 1.70, 
          material: "p", condition: "Media", operation: 'Desbaste', machine: "Coroturn 107"
        },

        //condições difíceis *******
        {
          iso: "CCMT 06 02 08", geometry: "PR", class: 4335, vc: 255, fn: 0.19, ap: 1.60, 
          material: "p", condition: "Dificil", operation: 'Desbaste', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 11 T3 08", geometry: "PM", class: 4335, vc: 250, fn: 0.20, ap: 1.70, 
          material: "p", condition: "Dificil", operation: 'Desbaste', machine: "Coroturn 107"
        },

      //Para aços inoxidáveis ******

        //condições boas *******
        {
          iso: "CCMT 06 02 08", geometry: "MR", class: 2015, vc: 255, fn: 0.19, ap: 1.60, 
          material: "m", condition: "Boa", operation: 'Desbaste', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 11 T3 08", geometry: "MR", class: 2220, vc: 210, fn: 0.25, ap: 2.00, 
          material: "m", condition: "Boa", operation: 'Desbaste', machine: "Coroturn 107"
        },

        //condições médias *******
        {
          iso: "CCMT 06 02 08", geometry: "MR", class: 2035, vc: 180, fn: 0.19, ap: 1.60, 
          material: "m", condition: "Media", operation: 'Desbaste', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 11 T3 08", geometry: "MR", class: 2025, vc: 180, fn: 0.25, ap: 2.00, 
          material: "m", condition: "Media", operation: 'Desbaste', machine: "Coroturn 107"
        },

        //condições difíceis *******
        {
          iso: "CCMT 06 02 08", geometry: "MR", class: 2035, vc: 180, fn: 0.19, ap: 1.60, 
          material: "m", condition: "Dificil", operation: 'Desbaste', machine: "Coroturn 107"
        },
  
        {
          iso: "DCMT 11 T3 08", geometry: "MR", class: 2035, vc: 160, fn: 0.25, ap: 2.00, 
          material: "m", condition: "Dificil", operation: 'Desbaste', machine: "Coroturn 107"
        },
      
      //Para ferro fundido****

        //condições boas *******
        {
          iso: "CCMT 06 02 08", geometry: "KR", class: 3210, vc: 355, fn: 0.19, ap: 1.60, 
          material: "k", condition: "Boa", operation: 'Desbaste', machine: "Coroturn 107"
        },

        {
          iso: "DCMT 11 T3 08", geometry: "KR", class: 3210, vc: 310, fn: 0.25, ap: 2.00, 
          material: "k", condition: "Boa", operation: 'Desbaste', machine: "Coroturn 107"
        },

        //condições médias *******
        {
          iso: "CCMT 06 02 08", geometry: "KR", class: 3210, vc: 355, fn: 0.19, ap: 1.60, 
          material: "k", condition: "Media", operation: 'Desbaste', machine: "Coroturn 107"
        },

        {
          iso: "DCMT 11 T3 08", geometry: "KR", class: 3210, vc: 310, fn: 0.25, ap: 2.00, 
          material: "k", condition: "Media", operation: 'Desbaste', machine: "Coroturn 107"
        },

        //condições difíceis *******
        {
          iso: "CCMT 06 02 08", geometry: "KR", class: 3225, vc: 225, fn: 0.19, ap: 1.60, 
          material: "k", condition: "Dificil", operation: 'Desbaste', machine: "Coroturn 107"
        },

        {
          iso: "DCMT 11 T3 08", geometry: "KR", class: 3225, vc: 210, fn: 0.25, ap: 2.00, 
          material: "k", condition: "Dificil", operation: 'Desbaste', machine: "Coroturn 107"
        },

      //Para superligas****

        //condições boas *******
        {
          iso: "CCMT 06 02 04", geometry: "MM", class: 1105, vc: 80, fn: 0.08, ap: 0.70, 
          material: "s", condition: "Boa", operation: 'Desbaste', machine: "Coroturn 107"
        },

        {
          iso: "DCMT 07 02 04", geometry: "MM", class: 1105, vc: 80, fn: 0.08, ap: 0.70, 
          material: "s", condition: "Boa", operation: 'Desbaste', machine: "Coroturn 107"
        },

        //condições médias *******
        {
          iso: "CCMT 06 02 04", geometry: "MM", class: 1115, vc: 65, fn: 0.08, ap: 0.70, 
          material: "s", condition: "Media", operation: 'Desbaste', machine: "Coroturn 107"
        },

        {
          iso: "DCMT 07 02 04", geometry: "MM", class: 1115, vc: 65, fn: 0.08, ap: 0.70, 
          material: "s", condition: "Media", operation: 'Desbaste', machine: "Coroturn 107"
        },

  
  ];
}
