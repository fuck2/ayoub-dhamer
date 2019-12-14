import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChoiceComponent } from './choice/choice.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeModeleComponent } from './liste-modele/liste-modele.component';
import { EditProfilCouterierComponent } from './edit-profil-couterier/edit-profil-couterier.component';
import { AjoutModeleCouterierComponent } from './ajout-modele-couterier/ajout-modele-couterier.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { ModelePersoComponent } from './modele-perso/modele-perso.component';
import { CommandePersoAttenteComponent } from './commande-perso-attente/commande-perso-attente.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'choix', component: ChoiceComponent },
  {path: 'inscription/:type', component: SignupComponent },
  {path:  'connexion', component: SigninComponent},
  {path:  'dashboard', component: DashboardComponent},

    {path:  'EditerProfil', component: EditProfilCouterierComponent},
    {path:  'AjoutModele', component: AjoutModeleCouterierComponent},


  {path:  'Admindashboard', component: AdmindashboardComponent,
 /* children:[
    {path:  'ListeClient', component: ListeClientComponent},

  ]*/
  },
  {path:  'ListeUsers', component: ListeUsersComponent},
  {path:  'ModelePersonnalise', component: ModelePersoComponent},
  {path:  'Commande', component: CommandePersoAttenteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
