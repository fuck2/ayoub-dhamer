import { Login } from './../shared/login.model';
import { UserObjectService } from './../shared/user-object.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { EmployeeService } from 'src/app/shared/client.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  login: string;
  passe: string;

reactiveForm: FormGroup;
LoginTest = true;
  constructor(private service: EmployeeService, private router: Router, private _snackBar: MatSnackBar, private fb: FormBuilder , private firestore: AngularFirestore, private UserData: UserObjectService) { }

  ngOnInit() {
    $(document).ready(() => {

      $('.navbar-burger').click(() => {

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $('.navbar-burger').toggleClass('is-active');
          $('.navbar-menu').toggleClass('is-active');

      });
    });
    this.resetForm();


  }
  resetForm(form?: NgForm) {

    if (form != null) {
      form.resetForm();
    }
    this.service.formData2 = {
      mail: '',
      passe: '',

    };
  }

  onLogin(form: NgForm) {

    const data = Object.assign({}, form.value);

    //console.log(data.login + ' ' + data.passe);
    firebase.auth().signInWithEmailAndPassword(data.login, data.passe).then(res => {

    console.log('success', 'Successfully Logged In!');
    this.LoginTest = true;
    let cityRef = this.firestore.firestore.collection('Client');
    let cityRef2 = this.firestore.firestore.collection('Couterier');
    let query=cityRef.where('mail','==',data.login)
     query.get()
    .then(function(querySnapshot) {
       querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          let UserObject= JSON.parse(JSON.stringify(doc.data()));
delete UserObject.confirm;
delete UserObject.passe;
console.log(UserObject);


           sessionStorage.setItem('user',JSON.stringify(UserObject));

           sessionStorage.setItem('id',doc.id);
sessionStorage.setItem('type','Client');
      });
  })
   .catch(function(error) {
    console.log("Error getting documents: ", error);
 });



 let query2=cityRef2.where('mail','==',data.login)
 query2.get()
.then(function(querySnapshot) {
   querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
       console.log(doc.id, " => ", doc.data());
      let UserObject= JSON.parse(JSON.stringify(doc.data()));
delete UserObject.confirm;
delete UserObject.passe;
console.log(UserObject);
       sessionStorage.setItem('user',JSON.stringify(UserObject));

       sessionStorage.setItem('id',doc.id);
       sessionStorage.setItem('type','Couterier');
  });
})
.catch(function(error) {
console.log("Error getting documents: ", error);
});
 this.router.navigateByUrl('dashboard');


   }, err => {
    this.LoginTest = false;
    console.log('danger', err.message);
    this._snackBar.open('Login Impossible Veuillez Verifier!', 'FERMER', {
       duration: 5000,
     });
   });

  }

//     let db=this.firestore.firestore.collection('Client');


  //   let cityRef = this.firestore.firestore.collection('Client').doc('' + data.login);
  //   let getDoc = cityRef.get()
  //   .then(doc => {
  //     if (!doc.exists) {
  //       console.log('No such document!');

  //       this._snackBar.open('Login Impossible Veuillez Verifier!', 'FERMER', {
  //              duration: 5000,
  //            });
  //     } else {

  //       this.router.navigate(['dashboard', doc.get('id')]);
  //     }
  //   })
  //   .catch(err => {
  //     console.log('Error getting document', err);
  //   });
  // }

}






