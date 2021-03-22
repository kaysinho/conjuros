import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  mensajes:Array<any> = [];
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getMensajes()
  }

  getMensajes(){
    this.data.getMensajes()
      .subscribe( data => {
        this.mensajes = data.mensajes;
      })
  }

}
