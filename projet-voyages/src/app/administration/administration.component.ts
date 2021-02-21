import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormControl , Validators} from '@angular/forms';
import { Forfait } from '../forfait';
import { VoyagesService } from '../voyages.service';
import { MatTable } from '@angular/material/table';  // Permet de mettre à jour les données du tableau 
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide
import { MatDialog } from '@angular/material/dialog';
import { DialogNewVoyageComponent } from '../dialog-new-voyage/dialog-new-voyage.component';
import { AjouterComponent } from '../ajouter/ajouter.component';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit { 
  @ViewChild(MatTable) tableForfait: MatTable<any>;

  tableauVoyages: Forfait[]; 
  columnsToDisplay = ['destination', 'villeDepart', 'hotel.nom',  'prix', 'rabais', 'dateDepart', 'dateRetour','actions']; 
  
  /* ANTIGO
  columnsToDisplay = ['destination', 'villeDepart', 'hotel.nom', 'hotel.coordonnees', 'hotel.nombreEtoiles', 'hotel.nombreChammbres', 'hotel.caracteristiques', 'prix', 'rabais', 'dateDepart', 'dateRetour', 'vedette' ,'actions']; */

  @Input() forfait: Forfait;
  @Input() formAjouter: AjouterComponent;
  @Output() forfaitFormAjout = new EventEmitter();
  newForfait : Forfait;
  selectedForfait: Forfait;

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
    this.getForfaits();
  }

  onSelect(forfait: Forfait): void {
    this.selectedForfait = forfait;
  }

  getForfaits(): void {
    this.voyagesService.getForfaits()
        .subscribe(resultat => this.tableauVoyages = resultat);
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
          /*forfait.push(forfait);*/ 
          formAjouter.resetForm(); 
          tableauVoyages.renderRows(); });
    }
  } 

  /* Exemple avec open dialog */
  
  openDialogNewVoyage(): void {
    const dialogRef = this.dialog.open(DialogNewVoyageComponent, {
      width: '100%',
      data: this.newForfait
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        this.newForfait = result;
        console.log(this.newForfait);
        this.voyagesService.addForfaits(this.newForfait)
            .subscribe(forfait  => { 

              this.tableauVoyages.push(forfait); //erreur dans forfait => element acces expression should take an argument???? 
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