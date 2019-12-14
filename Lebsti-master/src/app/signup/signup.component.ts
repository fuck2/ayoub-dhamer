import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/client.service';

import * as firebase from 'firebase';
import { ActivatedRoute,Router } from '@angular/router';
import { NgForm, FormGroup} from '@angular/forms';
import {FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import * as $ from 'jquery';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  type:String;
  UserExsists=false;
  hide = true;
  reactiveForm:FormGroup;
  constructor(private service: EmployeeService,
     private firestore:  AngularFirestore , private route: ActivatedRoute,private router: Router,private fb: FormBuilder) { }
    gouvernerats=  [
      {value: 'Tunis', viewValue: 'Tunis'},
      {value: 'Ariana', viewValue: 'Ariana'},
      {value: 'Ben arous', viewValue: 'Ben arous'}
    ];

    villes=  [
      {value: 'Ariana', viewValue: 'Raoued'},
      {value: 'Ariana', viewValue: 'ghazela'},

      {value: 'Tunis', viewValue: 'charguia'},
      {value: 'Tunis', viewValue: 'Menzah'},

      {value: 'Ben arous', viewValue: 'Ben arous'}
    ];

    villespec=[];
    selected ='';
    ngOnInit() {
      $(document).ready(()=> {

        $('.navbar-burger').click(() => {

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $('.navbar-burger').toggleClass('is-active');
            $('.navbar-menu').toggleClass('is-active');

        });
      });
      this.resetForm();
     this.reactiveForm=this.fb.group({
      'mail' : new FormControl('', [Validators.email,Validators.required]),
      'username' : new FormControl('', [Validators.required]),
      'prenom' : new FormControl('', [Validators.required]),
      'cin' : new FormControl('', [Validators.required, Validators.minLength(8),Validators.pattern('[0-9]*')]),
      'login' : new FormControl('', [Validators.required]),
      'adresse' : new FormControl('', [Validators.required]),
      'passe' : new FormControl('', [Validators.required]),
      'ville' : new FormControl('', [Validators.required]),
      'gouvernerat' : new FormControl('', [Validators.required]),
      'confirm' : new FormControl('', [Validators.required]),


     },
     {validator: this.passwordMatchValidator}
     )


     this.route.params.subscribe((params)=>{
      this.type= params['type'];
    })
   // console.log(this.type);
    }
    passwordMatchValidator(frm: FormGroup) {
      return frm.get('passe').value === frm.get('confirm').value
         ? null : {'mismatch': true};
   }

    public removeValidators(form: FormGroup) {
      for (const key in form.controls) {
        this.reactiveForm.get(key).clearValidators();
        this.reactiveForm.get(key).updateValueAndValidity();
      }
  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.service.formData = {
id:'',
      cin: '',
      nom: '',
      prenom: '',
      mail: '',
      passe: '',
      login: '',
      adresse: '',
      ville: '',
      Gouvernerat: '',


    }

  }



  onSubmit(form: NgForm) {


    let data = Object.assign({}, this.reactiveForm.value);
    //delete data.id;

    firebase.auth().createUserWithEmailAndPassword(data.mail, data.passe)
    .then(res => {

      if(this.type==='Client'){
        console.log("client");
         this.firestore.collection('Client').add(data);


      }
      if(this.type==='Couterier'){
        this.firestore.collection('Couterier').add(data);



      }

      this.resetForm(form);
      this.removeValidators(this.reactiveForm);

      this.router.navigate(['connexion']);
    }, err =>{console.log(err);});










  }


  onChange(ville:any) {
    this.villespec=[];

    for (let i = 0; i < this.villes.length; i++) {
      if(this.villes[i].value==(ville)){
          this.villespec.push({villeSpec:this.villes[i].viewValue});
          console.log(this.villespec[i]);
      }

  }
  }
  }



