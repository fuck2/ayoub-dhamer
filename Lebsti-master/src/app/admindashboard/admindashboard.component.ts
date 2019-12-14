import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  AllCompetition:any = [];
cout:string;
accept:boolean=false;
refuse:boolean=false;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    
    let cityRef = this.firestore.firestore.collection('Modele').get().then((snapshot)=>{
      snapshot.docs.forEach(doc=>{
        this.cout=doc.data().idCout;
this.AllCompetition.push(doc.data());

      })
    })

   /* let citiesRef =  this.firestore.firestore.collection('Couterier');
    let query = citiesRef.where(firebase.firestore.FieldPath.documentId(), '==', this.cout).get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }  
    
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
*/
 

    console.log(this.AllCompetition);

  }

  Accepter(item:any,id:any){
 this.accept=true;

    let newCityRef = this.firestore.firestore.collection('Modele').doc(id).update({
      "depositVerif":true,

    });


  }
  Refuser(item:any,id:any){ 
    this.refuse=true;

    let newCityRef = this.firestore.firestore.collection('Modele').doc(id).update({
      "depositVerif":false,

    });
  }
}
