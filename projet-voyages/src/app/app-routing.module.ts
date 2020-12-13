import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Inclusion des composants utilisés par la navigation
import { ListeVoyagesComponent } from './liste-voyages/liste-voyages.component';

const routes: Routes = [
  { path: 'liste-voyage', component: ListeVoyagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
