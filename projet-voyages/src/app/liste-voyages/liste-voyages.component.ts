import { Component, OnInit , Input } from '@angular/core';
import { Forfait } from '../forfait';
import { forfaits } from '../mock-forfaits';

@Component({
  selector: 'app-liste-voyages',
  templateUrl: './liste-voyages.component.html',
  styleUrls: ['./liste-voyages.component.css']
})
export class ListeVoyagesComponent implements OnInit {

  tableauVoyages: Forfait[] = forfaits;
  @Input() forfait: Forfait;

  constructor() { }

  ngOnInit(): void {
  }

}
