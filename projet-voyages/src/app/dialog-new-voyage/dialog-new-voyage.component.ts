import { Component, Inject } from '@angular/core';
import { Forfait } from '../forfait';
import { FormControl , Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-new-voyage',
  templateUrl: './dialog-new-voyage.component.html',
  styleUrls: ['./dialog-new-voyage.component.css']
})

export class DialogNewVoyageComponent{

constructor(
    public dialogRef: MatDialogRef<DialogNewVoyageComponent>, 
    @Inject(MAT_DIALOG_DATA) public newForfait: Forfait){
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

    
    onAnnulerClick(): void {
      this.dialogRef.close();
    }
}
