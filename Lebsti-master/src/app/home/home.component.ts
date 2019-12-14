import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { storage } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.clear();
    sessionStorage.clear();


    $(document).ready(()=> {

      $('.navbar-burger').click(() => {

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $('.navbar-burger').toggleClass('is-active');
          $('.navbar-menu').toggleClass('is-active');

      });
    });
  }



}
