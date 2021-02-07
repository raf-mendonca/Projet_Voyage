import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { VoyagesService } from './voyages.service';

/* Material*/
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaxicompComponent } from './maxicomp/maxicomp.component';
import { MinicompComponent } from './minicomp/minicomp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarcompComponent } from './starcomp/starcomp.component';
import { ListeVoyagesComponent } from './liste-voyages/liste-voyages.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { FormRechercheComponent } from './form-recherche/form-recherche.component';
import { ForfaitXComponent } from './forfait-x/forfait-x.component';
import { AdministrationComponent } from './administration/administration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EnteteComponent } from './entete/entete.component';
import { ForfaitYComponent } from './forfait-y/forfait-y.component';
import { DialogNewVoyageComponent } from './dialog-new-voyage/dialog-new-voyage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjouterComponent } from './ajouter/ajouter.component';

@NgModule({
  declarations: [
    AppComponent,
    MaxicompComponent,
    MinicompComponent,
    StarcompComponent,
    ListeVoyagesComponent,
    SidenavbarComponent,
    FormRechercheComponent,
    ForfaitXComponent,
    AdministrationComponent,
    PageNotFoundComponent,
    EnteteComponent,
    ForfaitYComponent,
    DialogNewVoyageComponent,
    AjouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatListModule,
    MatSliderModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatGridListModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    NgbModule
    
  ],
  providers: [VoyagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
