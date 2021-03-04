import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  services : Array<any> = []
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getServices()
  }

  getServices(){
    this.data.getServices()
      .subscribe( data => {
        this.services = data.servicios;
      })
  }
}
