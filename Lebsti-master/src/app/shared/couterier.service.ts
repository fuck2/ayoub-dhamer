import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Login } from './login.model';
import { Modele } from './modele.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';



import { Couterier } from './couterier';



@Injectable({
  providedIn: 'root'
})
export class CouterierService {
  formData2: Modele;
  formData: Client;
  downloadURL: string;
  path: string;

  constructor(private firestore: AngularFirestore) {
    //this.clients = this.firestore.collection('clients').valueChanges();
    this.couturiersCollection = this.firestore.collection('Couterier');
    this.couturiers = this.couturiersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Couterier;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getEmployees() {
    return this.firestore.collection('Categorie').snapshotChanges();
  }
  setUrl(d: any) {
    this.downloadURL = d;
  }
  getUrl() {
    return this.downloadURL;
  }
  setPath(d: any) {
    this.path = d;
  }
  getPath() {
    return this.path;
  }
  setData(d: any) {
    this.path = d;
  }
  getData() {
    return this.path;
  }







  couturiersCollection: AngularFirestoreCollection<Couterier>;
  couturiers: Observable<Couterier[]>;
  couturierDoc: AngularFirestoreDocument<Couterier>;


  deleteCouturier(couturier: Couterier) {
    this.couturierDoc = this.firestore.doc('Couterier/${couturier.id}');
    console.log(couturier.id);
    this.couturierDoc.delete();


  }

  getCouturier() {
    return this.couturiers;
  }





}
