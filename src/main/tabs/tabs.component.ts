import { Component, Input } from '@angular/core';
import { geometry } from '../stepper/stepper.component';
import { MatTabsModule } from '@angular/material/tabs'
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatTabsModule, PanelComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  /*
    It receives from the parent component an array of arrays of geometries
    being each one a category (like external, internal, or others) and, inside each one
    a array of geometries for that category. The data contains the start, end, diameter and
    the already filtred and calculated inserts and parameters
  */
  @Input() tabData!:geometry[][]
}
