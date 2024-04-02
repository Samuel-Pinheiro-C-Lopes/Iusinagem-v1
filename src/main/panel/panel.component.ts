import { Component, Input } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { Insert } from '../catalog/catalog.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [MatExpansionModule, ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  @Input() insert?:Insert;
}
