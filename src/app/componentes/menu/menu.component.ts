import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  links : Array<any> = []
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getLinks()
  }

  getLinks(){
    this.data.getLinks()
      .subscribe( data => {
        this.links = data.links;
      })
  }

}
