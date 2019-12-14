import { Component, OnInit } from '@angular/core';
import { CouterierService } from '../shared/couterier.service';
import { Couterier } from '../shared/couterier';

@Component({
  selector: 'app-liste-couterier',
  templateUrl: './liste-couterier.component.html',
  styleUrls: ['./liste-couterier.component.scss']
})
export class ListeCouterierComponent implements OnInit {

  couturiers : Couterier[];

  constructor(private cs : CouterierService) { }

  ngOnInit() {
    this.cs.getCouturier().subscribe(couturiers => {
      console.log(couturiers);
      this.couturiers = couturiers;
    });
  }

  deleteClient(event, couturier){

    this.cs.deleteCouturier(couturier);
    this.ngOnInit();
  }

}
