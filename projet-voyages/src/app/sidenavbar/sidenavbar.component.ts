import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Forfait } from '../forfait';
import { VoyagesService } from '../voyages.service';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
 /* @Input() forfait: Forfait;
  forfaits: Forfait[] = forfaits ;*/
  
  tableauVoyages: Forfait[];
  
  showFiller = false; 

  title = 'Forfaits voyage';


  constructor(private voyagesService: VoyagesService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  getForfaits(): void {
    this.voyagesService.getForfaits()
        .subscribe(resultat => this.tableauVoyages = resultat);
  }

}
