import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Forfait } from '../forfait';
import { FormControl , Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { VoyagesService } from '../voyages.service';
import { FormAjouter } from '../form-ajouter';

@Component({
  selector: 'app-dialog-new-voyage',
  templateUrl: './dialog-new-voyage.component.html',
  styleUrls: ['./dialog-new-voyage.component.css']
})

export class DialogNewVoyageComponent{

  @Input() forfait: Forfait;
  @Input() formAjouter: FormAjouter;
  @Output() forfaitFormAjout = new EventEmitter();

constructor(
    private voyagesService : VoyagesService, public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogNewVoyageComponent>, 
    @Inject(MAT_DIALOG_DATA) public newForfait: Forfait){
    }    

    
    onAdd(tableauVoyages: MatTable<Forfait>, formAjouter: NgForm): void {
      if (formAjouter.valid) {
        this.voyagesService.addForfaits(this.newForfait)
          .subscribe(forfait  => { 
            /*this.forfait.push(forfait); */
            formAjouter.resetForm(); 
            tableauVoyages.renderRows(); 
          });
      }
    }  

      
    onAnnulerClick(): void {
      this.dialogRef.close();
    }
}
