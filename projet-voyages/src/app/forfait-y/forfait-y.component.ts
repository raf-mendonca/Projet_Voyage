import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Forfait } from '../forfait';
import { VoyagesService } from '../voyages.service';

@Component({
  selector: 'app-forfait-y',
  templateUrl: './forfait-y.component.html',
  styleUrls: ['./forfait-y.component.css']
})
export class ForfaitYComponent implements OnInit {
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
