import { Component, Input , OnInit } from '@angular/core';

import { Forfait } from '../forfait';

@Component({
  selector: 'app-maxicomp',
  templateUrl: './maxicomp.component.html',
  styleUrls: ['./maxicomp.component.css']
})

export class MaxicompComponent implements OnInit {
  @Input() forfait: Forfait;
  @Input() starRating: number;

  constructor() { }

  ngOnInit(): void {
    
  }

}
