import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Forfait } from '../forfait';
import { forfaits } from '../mock-forfaits';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  @Input() forfait: Forfait;
  forfaits: Forfait[] = forfaits ;
  
  
  showFiller = false; 

  title = 'Forfaits voyage';



  constructor() { }

  ngOnInit(): void {
  }

}
