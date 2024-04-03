import { Component, Input } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { insert } from '../main.component';
import { parameters } from '../stepper/stepper.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [MatExpansionModule, ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  @Input() insertsAndParameters!:[insert, parameters][]


}
