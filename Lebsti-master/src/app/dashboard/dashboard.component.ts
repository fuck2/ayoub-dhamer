import { UserObjectService } from './../shared/user-object.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
id: any;
UserObject:any;
UserType:any;
isClient:any;
isCouterier:any;
mySubscription:any;
AllCompetition:any = [];
AllCompetition2:any = [];

term:string;
testFiltre:boolean=false;
tableavecFiltre:any=[];
selectedFiltre:any;
NomCategorie:any;
qte:any;
idmodeldanscommande:any;
idcurrentuser=sessionStorage.getItem('id');
  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, private Service: UserObjectService,private router:Router) {

   }

  ngOnInit() {



    
 

    this.UserType=sessionStorage.getItem('type');

   
    this.isClient=this.UserType=='Client';
    this.isCouterier=this.UserType=='Couterier'?true:false;
    console.log(this.UserType)
    console.log(this.isClient)



      let cityRef = this.firestore.firestore.collection('Modele').get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
          if(doc.data().depositVerif==true){
this.AllCompetition.push(doc.data());
          }
        })
      })

      let cityRef2 = this.firestore.firestore.collection('commande').get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
          this.idmodeldanscommande=doc.data().idmodel;
          let qte=doc.data().quantite;
          let prix=doc.data().prix;
          let prixtotale=doc.data().prixtotale;
          let idclient=doc.data().idclient;

          if(this.idcurrentuser==doc.data().idcout){

            let citiesRef3 = this.firestore.firestore.collection('Modele');
            let query = citiesRef3.where('id', '==', this.idmodeldanscommande).get()
              .then(snapshot => {
              
            
                snapshot.forEach(doc => {
                 this.AllCompetition2.push({categorie:doc.data().categorie,prix:prix,qte:qte,prixtotale:prixtotale,idclient:idclient});

                  console.log(this.AllCompetition2);
                });
              })

              
            }

        })
      })


       

    $( function() {

      'use strict';

      (function() {

        const aside = $('.side-nav'),

            showAsideBtn = $('.show-side-btn'),

            contents = $('#contents');

        showAsideBtn.on('click', function() {

          $('#' + $(this).data('show')).toggleClass('show-side-nav');

          contents.toggleClass('margin');

        });

        if ($(window).width() <= 767) {

          aside.addClass('show-side-nav');

        }
        $(window).on('resize', function() {

          if ($(window).width() > 767) {

            aside.removeClass('show-side-nav');

          }

        });

        // dropdown menu in the side nav
        const slideNavDropdown = $('.side-nav-dropdown');

        $('.side-nav .categories li').on('click', function() {

          $(this).toggleClass('opend').siblings().removeClass('opend');

          if ($(this).hasClass('opend')) {

            $(this).find('.side-nav-dropdown').slideToggle('fast');

            $(this).siblings().find('.side-nav-dropdown').slideUp('fast');

          } else {

            $(this).find('.side-nav-dropdown').slideUp('fast');

          }

        });

        $('.side-nav .close-aside').on('click', function() {

          $('#' + $(this).data('close')).addClass('show-side-nav');

          contents.removeClass('margin');

        });

      }());
    });


    this.route.params.subscribe((params) => {
      this.id = params.uid;
    });
    console.log(this.id);

    firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    this.UserObject=JSON.parse(localStorage.getItem('user'));

console.log('Logged In');
//console.log(firebase.auth().currentUser);
//console.log(this.u);
  } else {
console.log('nope');
  }
});


  }

  //this 2 functions for the filtre handleselection and search
  handleSelection(test:any){
    this.selectedFiltre=test;
  }

  search(test:any){

    this.testFiltre=true;
    this.tableavecFiltre=[];
if(this.selectedFiltre=="prix"){
  for (let index = 0; index < this.AllCompetition.length; index++) {
    if( this.AllCompetition[index].prix.includes(test)){
    // console.log(this.AllCompetition[index]);
     this.tableavecFiltre.push(this.AllCompetition[index]);
    }
     
   }
}
else if(this.selectedFiltre=="categorie"){
  for (let index = 0; index < this.AllCompetition.length; index++) {
    if( this.AllCompetition[index].categorie.includes(test)){
    // console.log(this.AllCompetition[index]);
     this.tableavecFiltre.push(this.AllCompetition[index]);
    }
     
   }
}
 
  console.log( this.tableavecFiltre);
  }

  ValueofQte(event:any){
    this.qte=event.target.value;
    console.log( event.target.value);

  }

  commander(idmodel:any,idcout:any,prix:any){
    
let newCityRef = this.firestore.firestore.collection('commande').add({
  "idclient":this.idcurrentuser,
  "idcout":idcout,
  "idmodel":idmodel,
  "prix":prix,
  "quantite": this.qte,
  "prixtotale":this.qte*prix,


});
  }
 

}
