import { Component, Input, OnInit } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

import { insert } from '../main.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit {

  @Input() data!:insert[];

  displayedColumns: string[] = [
    'iso', 'geometry', 'class', 'vc', 'fn', 'ap', 
    'material', 'condition', 'machine'
  ];
  dataSource!:insert[];

  ngOnInit() {
    this.dataSource = this.data;
  }

}
