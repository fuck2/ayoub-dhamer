import { Router,Route, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  UserObject:any;
  UserType:any;
  isClient:any;
  isCouterier:any;
  constructor(private router:Router) {
    this.UserObject=JSON.parse(sessionStorage.getItem('user'));
    this.UserType=sessionStorage.getItem('type');
    this.isClient=this.UserType=="Client";
    this.isCouterier=this.UserType=="Couterier";
   }


  ngOnInit() {


console.log(this.UserType);
console.log(this.isClient)
}
}
