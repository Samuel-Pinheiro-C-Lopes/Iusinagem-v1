import { Component, Input } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { geometry } from '../stepper/stepper.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [MatExpansionModule, MatDivider],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

  /*
    Each panel will receive a geometry by it's parent component,
    each containing an start, end, diameter and array of 
    insert data and parameters according to the correspondig
    insert 
  */
  @Input() geometry!:geometry

}
