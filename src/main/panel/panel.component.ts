import { Component, Input } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { insert } from '../main.component';
import { geometry, parameters } from '../stepper/stepper.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [MatExpansionModule, MatDivider],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  @Input() geometry!:geometry


}
