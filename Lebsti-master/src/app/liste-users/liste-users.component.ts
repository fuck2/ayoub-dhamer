import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.scss']
})
export class ListeUsersComponent implements OnInit {
  ListeClient:any = [];
  ListeCout:any = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {

    let cityRef = this.firestore.firestore.collection('Client').get().then((snapshot)=>{
      snapshot.docs.forEach(doc=>{
        console.log(doc.data().id);
this.ListeClient.push(doc.data());

      })
    })
 
    
    let cityRef2 = this.firestore.firestore.collection('Couterier').get().then((snapshot)=>{
      snapshot.docs.forEach(doc=>{
       // console.log(doc.data());
this.ListeCout.push(doc.data());

      })
    })

  }

 /* Supprimer1(item:any){
    this.firestore.firestore.collection("Client").doc(item).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }
  */

}
