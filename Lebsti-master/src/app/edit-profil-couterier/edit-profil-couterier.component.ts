import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profil-couterier',
  templateUrl: './edit-profil-couterier.component.html',
  styleUrls: ['./edit-profil-couterier.component.scss']
})
export class EditProfilCouterierComponent implements OnInit {

  UserObject=JSON.parse(localStorage.getItem('user'));
  UserType:any;
  isClient:any;
  isCouterier:any;
  constructor() {
    this.UserType=sessionStorage.getItem('type');
    this.isClient=this.UserType=="Client";
    this.isCouterier=this.UserType=="Couterier";
   }

  ngOnInit() {
  }

}
