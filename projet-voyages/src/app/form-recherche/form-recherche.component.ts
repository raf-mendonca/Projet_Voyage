import { Component, OnInit , Input } from '@angular/core';
import { FormControl , Validators} from '@angular/forms';
import { Forfait } from '../forfait';
import { forfaits } from '../mock-forfaits';

@Component({
  selector: 'app-form-recherche',
  templateUrl: './form-recherche.component.html',
  styleUrls: ['./form-recherche.component.css']
})
export class FormRechercheComponent implements OnInit {  

  @Input() forfait: Forfait;
  forfaits: Forfait[] = forfaits ;

  //Départs
  departs: string[] = [ "Québec","Montrèal"];  

  //Déstinations
  destinations: string[] = [ "Rio de Janeito, Brèsil","Angrados Reis, Brèsil","Salvador, Brèsil","Itacaré, Brèsil","Ceara, Brèsil","Fernando de Noranha, Brèsil"];

  nbStar: number = 1;
  adresse: string = "";
  hotel: string = "";

  //Checkbox
  checked = false;
  

  // Validations texte
  validations = new FormControl(null, Validators.required);

  getErrorValitations() {
    if (this.validations.hasError('required')) {
      return 'Vous devez entrer un texte ex: Abcdefg';
    }

    return this.validations.hasError('validations') ? 'Texte non valide' : '';
  }
  
 // Validations de prix
  number = new FormControl(null, Validators.required);

  getErrorMessage() {
    if (this.number.hasError('required')) {
      return 'Vous devez entrer une valeur';
    }

    return this.number.hasError('number') ? 'Prix ​​non valide' : '';
  }

  // Star rating
  formatValue(value: number) {
    if (value >0) {
      return Math.round(value);
    }
    return value;
  }
  
  constructor() { }
  ngOnInit(): void {
  }

}
