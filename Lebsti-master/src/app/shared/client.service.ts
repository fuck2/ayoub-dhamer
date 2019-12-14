import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Login } from './login.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Client;
  formData2: Login;





  clientsCollection : AngularFirestoreCollection<Client>;
  clients : Observable<Client[]>;
  clientDoc : AngularFirestoreDocument<Client>;

  constructor(private firestore: AngularFirestore) {
    //this.clients = this.firestore.collection('clients').valueChanges();
    this.clientsCollection = this.firestore.collection('Client');
    this.clients = this.clientsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Client;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

   deleteClient(client : Client){
    this.clientDoc = this.firestore.doc("Client/${client.id}");
    console.log(client.id);
this.firestore.collection('Client').doc(client.id).delete();
   this.clients.forEach((x)=>{
if(x['id']==client.id){
  x=null;
}
   })



   }

  getEmployees() {
    return this.clients;
  }


}
