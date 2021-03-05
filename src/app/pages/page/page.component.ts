import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  services : Array<any> = []
  type: string = "";
  id: string = "";

  title:string = "";
  description:Array<any> = [];
  imageUrl:string = "";

  constructor(private data:DataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams()
  }
  
  getData(){
    switch(this.type){
      case 'servicio': this.getServices(); break;
    }
    
  }

  setPage(title:string, imageUrl:string, description: Array<any>){
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  getParams(){
    this.route.paramMap.subscribe( paramMap => {
      this.type = paramMap.get('type');
      this.id = paramMap.get('pageId')
      this.getData()
  })
  }

  getServices(){
    this.data.getServices()
      .subscribe( data => {
        this.services = data.servicios;

        let service = this.services.filter(s => s.url.includes(this.type) && s.url.includes(this.id));
        if(service.length == 0){
          this.setPage("", "", [])
        }else{
          this.setPage(service[0].titulo, service[0].imagen, service[0].descripcion)
        }
      })
  }

}
