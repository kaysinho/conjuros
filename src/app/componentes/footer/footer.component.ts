import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear()
  links : Array<any> = []
  services : Array<any> = []

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getLinks()
    this.getServices()
  }

  getServices(){
    this.data.getServices()
      .subscribe( data => {
        this.services = data.servicios;
      })
  }

  getLinks(){
    this.data.getLinks()
      .subscribe( data => {
        this.links = data.links;
      })
  }

}
