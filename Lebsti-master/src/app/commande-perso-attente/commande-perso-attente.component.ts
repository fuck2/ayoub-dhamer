import { Component, OnInit } from '@angular/core';
import { Modele } from '../shared/modele.model';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { CommandePersoAttenteService } from '../shared/commande-perso-attente.service';

@Component({
  selector: 'app-commande-perso-attente',
  templateUrl: './commande-perso-attente.component.html',
  styleUrls: ['./commande-perso-attente.component.scss']
})
export class CommandePersoAttenteComponent implements OnInit {
  commandes : Modele[];

  constructor(private cs : CommandePersoAttenteService,  private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.cs.getEmployees().subscribe(commandes => {
      console.log(commandes);
      this.commandes = commandes;
    });
  }

  acceptModele(event, commande){
    console.log(sessionStorage.getItem('id'));
    this.cs.acceptModele(commande, sessionStorage.getItem('id'));
    this.ngOnInit();

  }

}
