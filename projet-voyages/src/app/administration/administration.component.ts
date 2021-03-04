import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormControl , Validators} from '@angular/forms';
import { Forfait } from '../forfait';
import { VoyagesService } from '../voyages.service';
import { MatTable } from '@angular/material/table';  // Permet de mettre à jour les données du tableau 
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide
import { MatDialog } from '@angular/material/dialog';
import { DialogNewVoyageForfaitComponent } from '../dialog-new-voyage-forfait/dialog-new-voyage-forfait.component';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { from } from 'rxjs';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit { 
  @ViewChild(MatTable) tableForfait: MatTable<any>;
  //forfaits: Forfait[];
  tableauVoyages: Forfait[]; 
  columnsToDisplay = ['destination', 'villeDepart', 'hotel.nom',  'prix', 'rabais', 'dateDepart', 'dateRetour','actions']; 
  newForfait : Forfait;
  selectedForfait: Forfait;

  /* ANTIGO
  columnsToDisplay = ['destination', 'villeDepart', 'hotel.nom', 'hotel.coordonnees', 'hotel.nombreEtoiles', 'hotel.nombreChammbres', 'hotel.caracteristiques', 'prix', 'rabais', 'dateDepart', 'dateRetour', 'vedette' ,'actions']; 
  @Input() forfait: Forfait;
  @Input() formAjouter: AjouterComponent;
  @Output() forfaitFormAjout = new EventEmitter();*/

  

  //Validations
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

  
  constructor(private voyagesService: VoyagesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    //Pour initialiser l'objet newForfait
    this.newForfait = {
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
    this.getAllForfaits();
  }
/*
  getForfaits(): void {
    this.voyagesService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
  } */

  
  getAllForfaits(): void {
    this.voyagesService.getAllForfaits()
        .subscribe(resultat => this.tableauVoyages = resultat);
  }
  
  

  onSelect(forfait: Forfait): void {
    this.selectedForfait = forfait;
  } 
  
  
  onEdit(forfaitFormEdition: NgForm): void {
    if (forfaitFormEdition.valid) {
      this.voyagesService.updateForfaits(this.selectedForfait)
          .subscribe(() => this.selectedForfait = null);
    }
  } 

  onDelete(forfait: Forfait): void {
    this.voyagesService.deleteForfaits(forfait._id)
        .subscribe(result => this.tableauVoyages = this.tableauVoyages.filter(f => f !== forfait));
  }
  
  
  onAdd(tableauVoyages: MatTable<Forfait>, formAjouter: NgForm): void {
    if (formAjouter.valid) {
      this.voyagesService.addForfaits(this.newForfait)
        .subscribe(forfait  => { 
          this.tableauVoyages.push(forfait); 
          formAjouter.resetForm(); 
          tableauVoyages.renderRows(); });
    }
  } 

  /* Exemple avec open dialog */
  
  openDialogNewVoyage(): void {
    const dialogRef = this.dialog.open(DialogNewVoyageForfaitComponent, {
      width: '80%',
      data: this.newForfait
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        this.newForfait = result;
        this.voyagesService.addForfaits(this.newForfait)
            .subscribe(forfait  => { 
              this.tableauVoyages.push(forfait); 
              this.newForfait._id = null; 
              this.newForfait.destination=''; 
              this.newForfait.villeDepart='';
              this.newForfait.hotel= {nom:'',coordonnees:'', nombreEtoiles:0, nombreChambres:0, caracteristiques:[]}; 
              this.newForfait.prix= 0;
              this.newForfait.rabais= 0;
              this.newForfait.dateDepart='';
              this.newForfait.dateRetour='';
              this.newForfait.vedette= false;
              this.tableForfait.renderRows()});
      }
    });
  }
}