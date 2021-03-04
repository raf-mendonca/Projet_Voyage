import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
//Inclusion des composants utilisés par la navigation
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ForfaitXComponent } from './forfait-x/forfait-x.component';
import { ForfaitYComponent } from './forfait-y/forfait-y.component';
import { AdministrationComponent } from './administration/administration.component';
import { AproposComponent } from './apropos/apropos.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'sidenavbar', component: SidenavbarComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'forfait-x', component: ForfaitXComponent },
  { path: 'forfait-y', component: ForfaitYComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'ajouter', component: AjouterComponent },
  { path: '',   redirectTo: '/sidenavbar', pathMatch: 'full' }, // rediriger vers `Sidenavbar l'accueil`
  { path: 'page-not-found', component: PageNotFoundComponent },  // Route générique pour une page 404 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
