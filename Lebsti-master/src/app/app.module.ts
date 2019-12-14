import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './choice/choice.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ListeModeleComponent } from './liste-modele/liste-modele.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import {MatTableModule} from '@angular/material/table';

import { StorageServiceModule } from 'ngx-webstorage-service';
import { EditProfilCouterierComponent } from './edit-profil-couterier/edit-profil-couterier.component';
import { AjoutModeleCouterierComponent } from './ajout-modele-couterier/ajout-modele-couterier.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { ImageComponent } from './image/image.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SideNavAdminComponent } from './side-nav-admin/side-nav-admin.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { ListeCouterierComponent } from "./liste-couterier/liste-couterier.component";
import { FilterPipe } from './filter.pipe';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { ModelePersoComponent } from './modele-perso/modele-perso.component';
import { CommandePersoAttenteComponent } from './commande-perso-attente/commande-perso-attente.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ChoiceComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    ListeModeleComponent,
    SideNavComponent,
    EditProfilCouterierComponent,
    AjoutModeleCouterierComponent,
    UploadTaskComponent,
    ImageComponent,
    AdmindashboardComponent,
    SideNavAdminComponent,
    ListeClientComponent,
ListeCouterierComponent,
FilterPipe,
ListeUsersComponent,
ModelePersoComponent,
CommandePersoAttenteComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    

  ],
  providers: [AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
