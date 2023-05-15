import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  today: number = Date.now();

  pi = 3.14159265359;

  a = 0.259;
  b = 1.3495;

  c: number = 0.259;
  d: number = 1.3495;

}
