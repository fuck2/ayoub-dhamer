import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup,FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { CouterierService } from '../shared/couterier.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Modele } from '../shared/modele.model';
import { Categorie } from '../shared/categorie.model';
import { Client } from '../shared/client.model';

@Component({
  selector: 'app-ajout-modele-couterier',
  templateUrl: './ajout-modele-couterier.component.html',
  styleUrls: ['./ajout-modele-couterier.component.scss']
})
export class AjoutModeleCouterierComponent implements OnInit {
  list:Categorie[];
  clt:any;
  constructor(private service: CouterierService,
    private firestore:  AngularFirestore , private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Categorie;
      })
    });
  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.resetForm();
    this.service.formData2 = {
      description: '',
      categorie: '',
      prix: '',
      imgUrl: '',
      id:'',
      idCout:'',
      depositVerif: false


    }

  }



  onSubmit(form: NgForm) {


    let data = Object.assign({}, form.value);
    delete data.id;

  // this.firestore.collection('Client').add(data);
  const citiesRef = this.firestore.collection('Modele');
  let number = Math.random();
  let id = number.toString(36).substr(2, 9);
  this.clt=localStorage.getItem("use");
  let setSf = citiesRef.doc(''+id).set({

    description: data.description+"",
    depositVerif:false,
    categorie: data.categorie+"",
    prix: data.prix+"",
    imgUrl: sessionStorage.getItem("url")+"",
    path:sessionStorage.getItem("path")+"",
    id:id,
    idCout:sessionStorage.getItem('id'),
    

  });
this.resetForm();


  }

}
