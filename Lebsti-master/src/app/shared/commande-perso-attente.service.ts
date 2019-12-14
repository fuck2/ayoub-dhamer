import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Modele } from './modele.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class CommandePersoAttenteService {

  commandesCollection: AngularFirestoreCollection<Modele>;
  comsCollection: AngularFirestoreCollection<Modele>;
  commandes: Observable<Modele[]>;
  coms: Observable<Modele[]>;
  commandeDoc: AngularFirestoreDocument<Modele>;

  constructor(private firestore: AngularFirestore) {
    //this.clients = this.firestore.collection('clients').valueChanges();
    this.commandesCollection = this.firestore.collection('ModelePerso');
    this.commandes = this.commandesCollection.snapshotChanges().map(changes => {

      return changes.map(a => {
        const data = a.payload.doc.data() as Modele;

        data.id = a.payload.doc.id;
        if (!a.payload.doc.data().depositVerif) {
          return data;
        }
        return null;
      });
    });
  }

  acceptModele(commande: Modele, idCout: string) {
    this.commandeDoc = this.firestore.doc("ModelePerso/${modele.id}");
    console.log(commande.id);
    commande.depositVerif = true;
    commande.idCout = idCout;
    this.firestore.collection('ModelePerso').doc(commande.id).update(commande);
    this.commandes.forEach((x) => {
      if (x['id'] == commande.id) {
        x['depositVerif'] = true;
      }
    })
  }

  getEmployees() {
    return this.commandes;
  }
}
