import { Component, Input } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

import { insert } from '../main.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  @Input() data:insert[] = [];

}
