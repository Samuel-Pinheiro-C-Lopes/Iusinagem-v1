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

  //the insert array data inputed by a parent component
  @Input() data!:insert[];

  //columns displayed in the table
  displayedColumns: string[] = [
    'iso', 'geometry', 'class', 'vc', 'fn', 'ap', 
    'material', 'condition', 'machine'
  ];

  /*
    Since the table takes the dataSource once and needs to reload after the component
    starts or after some event is triggered, only initializating it's attribute
    with the inputed data doesn't work since it takes the data before it's inputed,
    hence the attribution in the ngOnInit implemented on this component
  */
  dataSource!:insert[];
  ngOnInit() {
    this.dataSource = this.data;
  }

}
