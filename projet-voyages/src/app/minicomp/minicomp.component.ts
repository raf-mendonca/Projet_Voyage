import { Component, Input, OnInit } from '@angular/core';

import { Forfait } from '../forfait';

@Component({
  selector: 'app-minicomp',
  templateUrl: './minicomp.component.html',
  styleUrls: ['./minicomp.component.css']
})

export class MinicompComponent implements OnInit {
  @Input() forfait: Forfait;
  @Input() nombreEtoiles: number;
  constructor() { }

  ngOnInit(): void {
  }

}
