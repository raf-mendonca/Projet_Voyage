import { Component, Input , OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { VoyagesService } from '../voyages.service';

@Component({
  selector: 'app-maxicomp',
  templateUrl: './maxicomp.component.html',
  styleUrls: ['./maxicomp.component.css']
})

export class MaxicompComponent implements OnInit {
  tableauVoyages: Forfait[]; 
  @Input() forfait: Forfait;
  @Input() nombreEtoiles: number;

  constructor(private voyagesService: VoyagesService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  getForfaits(): void {
    this.voyagesService.getForfaits()
        .subscribe(resultat => this.tableauVoyages = resultat);
  }

}
