import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { VoyagesService } from '../voyages.service';


@Component({
  selector: 'app-forfait-x',
  templateUrl: './forfait-x.component.html',
  styleUrls: ['./forfait-x.component.css']
})
export class ForfaitXComponent implements OnInit {
 tableauVoyages: Forfait[];

  constructor(private voyagesService: VoyagesService) { }

  ngOnInit(): void {
    this.getAllForfaits();
  }
  
  getAllForfaits(): void {
    this.voyagesService.getAllForfaits()
        .subscribe(resultat => this.tableauVoyages = resultat);
  }

}
