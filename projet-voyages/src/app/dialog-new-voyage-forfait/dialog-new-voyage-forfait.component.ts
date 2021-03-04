import {Component, Inject, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {VoyagesService} from "../voyages.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Forfait} from "../forfait";
import {MatTable} from "@angular/material/table";
import {NgForm} from "@angular/forms";
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-dialog-new-voyage-forfait',
  templateUrl: './dialog-new-voyage-forfait.component.html',
  styleUrls: ['./dialog-new-voyage-forfait.component.css']
})

export class DialogNewVoyageForfaitComponent implements OnInit {
  number: string;
  @Input() forfaits: Forfait[];
  tableauVoyages: Forfait[];
  @Output() forfaitFormAjout = new EventEmitter();

  constructor(
      private voyagesService : VoyagesService,
      public dialog: MatDialog,
      public dialogRef: MatDialogRef<DialogNewVoyageForfaitComponent>,
      @Inject(MAT_DIALOG_DATA) public newForfait: Forfait,
  ) {}

  ngOnInit(): void {

  }

  onAdd(tableauVoyages: MatTable<Forfait>, forfaitFormAjout: NgForm): void {
    if (forfaitFormAjout.valid) {
        this.voyagesService.addForfaits(this.newForfait)
          .subscribe(forfait  => {
            this.tableauVoyages.push(forfait);
            forfaitFormAjout.resetForm();
            tableauVoyages.renderRows();
          });
      }
    }

  onAnnulerClick(): void {
    this.dialogRef.close();
  }

  onCloseDialog(): void {
    this.dialogRef.close(this.tableauVoyages)
  }

  getErrorMessage() {

  }
}
