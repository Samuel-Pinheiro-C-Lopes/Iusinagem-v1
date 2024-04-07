import { 
  Component, Input, OnInit, 
  AfterViewInit, ViewChild
} from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';

import { insert } from '../main.component';

export interface insertImg {
  forma: string,
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
  selector: 'app-catalog',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit, AfterViewInit {

  //the insert array data inputed by a parent component
  @Input() data!:insert[];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  //columns displayed in the table
  displayedColumns: string[] = [
    'forma', 'iso', 'geometry', 'class', 'vc', 'fn', 'ap', 
    'material', 'condition', 'machine'
  ];

  /*
    Since the table takes the dataSource once and needs to reload after the component
    starts or after some event is triggered, only initializating it's attribute
    with the inputed data doesn't work since it takes the data before it's inputed,
    hence the attribution in the ngOnInit implemented on this component
  */
  dataSource!:MatTableDataSource<insertImg, MatPaginator>;
  ngOnInit() {
    const data1:any = [

    ]

    this.data.forEach(insert => {
      data1.push({...insert, ...{forma: `./assets/insertsImgs/${insert.iso.charAt(0)}.png`}});
    });

    this.dataSource = new MatTableDataSource<insertImg>(data1);
  }


  /*
    The paginator property is updated based on the callback méthod focused in 
    the MatPaginator setted, making it changes whenever the user interacts with
    the structure 
  */
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
