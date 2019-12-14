import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/client.service';
import { Client } from '../shared/client.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.scss']
})
export class ListeClientComponent implements OnInit {

  clients : Client[];

  constructor(private cs : EmployeeService,  private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.cs.getEmployees().subscribe(clients => {
      console.log(clients);
      this.clients = clients;
    });
  }

  deleteClient(event, client){

    this.cs.deleteClient(client);
    this.ngOnInit();
    this.router.navigate(['dashboard/ListeClient']);
  }

}
