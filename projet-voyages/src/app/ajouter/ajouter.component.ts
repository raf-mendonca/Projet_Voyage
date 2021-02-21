import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl , Validators} from '@angular/forms';
import { Forfait } from '../forfait';
import { VoyagesService } from '../voyages.service';
import { MatTable } from '@angular/material/table';  // Permet de mettre à jour les données du tableau 
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
   @ViewChild(MatTable) tableForfait: MatTable<any>;

  forfait = {
    _id: null, 
      destination:'', 
      villeDepart:'', 
      hotel: { 
        nom: '', 
        coordonnees:'', 
        nombreEtoiles: 0, 
        nombreChambres: 0,  
        caracteristiques: ['']
      }, 
      prix: null, 
      rabais: null, 
      dateDepart: '', 
      dateRetour: '', 
      vedette: false,
      duree: '',
      da: '1996489',
  };
  submitted = false;

  caracteristique = '';

  //Checkbox
  checkchange(check){
   // check.checked == true ? caracteristique += check.source :   alert('remover o valor');
   console.log(check.source)
   if(check.checked){
     switch(check.source.id){
       case 'resto':
         if(!this.forfait.hotel.caracteristiques.includes('Restaurant')){
           this.forfait.hotel.caracteristiques.push('Restaurant');
         }
         break;
      case 'plage':
         if(!this.forfait.hotel.caracteristiques.includes('Face la plage')){
           this.forfait.hotel.caracteristiques.push('Face la plage');
         }
         break;
      case 'piscine':
         if(!this.forfait.hotel.caracteristiques.includes('Piscine')){
           this.forfait.hotel.caracteristiques.push('Piscine');
         }
         break;
      case 'club':
         if(!this.forfait.hotel.caracteristiques.includes('Mini-Club')){
           this.forfait.hotel.caracteristiques.push('Mini-Club');
         }
         break;
      case 'creche':
         if(!this.forfait.hotel.caracteristiques.includes('Garderie')){
           this.forfait.hotel.caracteristiques.push('Garderie');
         }
         break;
      case 'spa':
         if(!this.forfait.hotel.caracteristiques.includes('Spa')){
           this.forfait.hotel.caracteristiques.push('Spa');
         }
         break;
      case 'spa':
         if(!this.forfait.hotel.caracteristiques.includes('Spa')){
           this.forfait.hotel.caracteristiques.push('Spa');
         }
         break;
      case 'fitness':
         if(!this.forfait.hotel.caracteristiques.includes('Centre Fitness')){
           this.forfait.hotel.caracteristiques.push('Centre Fitness');
         }
         break;
      case 'wifi':
         if(!this.forfait.hotel.caracteristiques.includes('Wifi gratuit')){
           this.forfait.hotel.caracteristiques.push('Wifi gratuit');
         }
         break;

     }
   }
   if(!check.checked){
     switch(check.source.id){
       case 'resto':
         if(this.forfait.hotel.caracteristiques.includes('Restaurant')){
           this.forfait.hotel.caracteristiques.slice(this.forfait.hotel.caracteristiques.indexOf('Restaurant'));
         }
         break;
      case 'plage':
         if(this.forfait.hotel.caracteristiques.includes('Face la plage')){
            this.forfait.hotel.caracteristiques.slice(this.forfait.hotel.caracteristiques.indexOf('Face la plage'));
         }
         break;
      case 'piscine':
         if(this.forfait.hotel.caracteristiques.includes('Piscine')){
            this.forfait.hotel.caracteristiques.slice(this.forfait.hotel.caracteristiques.indexOf('Piscine'));
         }
         break;
      case 'club':
         if(this.forfait.hotel.caracteristiques.includes('Mini-Club')){
            this.forfait.hotel.caracteristiques.slice(this.forfait.hotel.caracteristiques.indexOf('Mini-Club'));
         }
         break;
      case 'creche':
         if(this.forfait.hotel.caracteristiques.includes('Garderie')){
           this.forfait.hotel.caracteristiques.slice(this.forfait.hotel.caracteristiques.indexOf('Garderie'));
         }
         break;
      case 'spa':
         if(this.forfait.hotel.caracteristiques.includes('Spa')){
            this.forfait.hotel.caracteristiques.slice(this.forfait.hotel.caracteristiques.indexOf('Spa'));
         }
         break;
      case 'spa':
         if(this.forfait.hotel.caracteristiques.includes('Spa')){
            this.forfait.hotel.caracteristiques.slice(this.forfait.hotel.caracteristiques.indexOf('Spa'));
         }
         break;
      case 'fitness':
         if(this.forfait.hotel.caracteristiques.includes('Centre Fitness')){
            this.forfait.hotel.caracteristiques.slice(this.forfait.hotel.caracteristiques.indexOf('Centre Fitness'));
         }
         break;
      case 'wifi':
         if(this.forfait.hotel.caracteristiques.includes('Wifi gratuit')){
            this.forfait.hotel.caracteristiques.slice(this.forfait.hotel.caracteristiques.indexOf('Wifi gratuit'));
         }
         break;

     }
   }
  }


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
  //Fin validations

  constructor(private voyageService: VoyagesService) { }

  ngOnInit(): void {
  }

  ajouterForfait(): void { //createProduct tableForfaits: MatTable<any>, forfaitFormAjout: NgForm
    // const data:  = {
    //   destination: this.forfait.destination, 
    //   villeDepart: this.forfait.villeDepart, 
    //   hotel: this.forfait.hotel, 
    //     nom: this.forfait.hotel.nom, 
    //     coordonnees: this.forfait.hotel.coordonnees, 
    //     nombreEtoiles: this.forfait.hotel.nombreEtoiles, 
    //     nombreChambres: this.forfait.hotel.nombreChambres, 
    //     caracteristiques: this.forfait.hotel.caracteristiques,     
    //   prix: this.forfait.prix, 
    //   rabais: this.forfait.rabais, 
    //   dateDepart: this.forfait.dateDepart, 
    //   dateRetour: this.forfait.dateRetour, 
    //   vedette: this.forfait.vedette
    // };

    this.voyageService.addForfaits(this.forfait)
      .subscribe(
        response => {
          console.log(response);     //console.log(response.push(response));    
          this.submitted = true;     
          //forfaitFormAjout.resetForm(); 
          //tableForfaits.renderRows();
          
        },
        error => {
          console.log(error);
        });
    }

    newForfait(): void {
      this.submitted = false;
      this.forfait = {
      _id: null, 
      destination:'', 
      villeDepart:'', 
      hotel: { 
        nom: '', 
        coordonnees:'', 
        nombreEtoiles: 0, 
        nombreChambres: 0,  
        caracteristiques: ['']
      }, 
      prix: null, 
      rabais: null, 
      dateDepart: '', 
      dateRetour: '', 
      vedette: false,
      duree: '',
      da: '1996489',
    };
  }//Fin ajouter

}//Fin class
