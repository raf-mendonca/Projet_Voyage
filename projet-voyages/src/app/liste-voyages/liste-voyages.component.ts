import { Component, OnInit , Input } from '@angular/core';
import { Forfait } from '../forfait';
import { VoyagesService } from '../voyages.service';

@Component({
  selector: 'app-liste-voyages',
  templateUrl: './liste-voyages.component.html',
  styleUrls: ['./liste-voyages.component.css']
})
export class ListeVoyagesComponent implements OnInit {
  tableauVoyages: Forfait[];

  constructor(private voyagesService: VoyagesService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  getForfaits(): void {
    this.voyagesService.getForfaits()
        .subscribe(resultat => this.tableauVoyages = resultat);
  }

}
