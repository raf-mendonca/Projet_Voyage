import { Component, OnInit, Input ,  Output, EventEmitter} from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-starcomp',
  templateUrl: './starcomp.component.html',
  styleUrls: ['./starcomp.component.css']
})
export class StarcompComponent implements OnInit {
  @Input() forfait: Forfait;
  @Input() starRating: number;
   
  constructor() { }

  ngOnInit(): void {
  }

}
