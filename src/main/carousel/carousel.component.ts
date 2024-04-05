import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { PdfViewerModule } from 'ng2-pdf-viewer';



@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatTabsModule, PdfViewerModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  img:any = 'D.png'
  
}
