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
  @Input() tabData!:geometry[][]
}
