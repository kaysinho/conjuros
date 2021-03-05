import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent implements OnInit { 
  testimonios : Array<any> = []
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getTestimonios()
  }

  getTestimonios(){
    this.data.getTestimonios()
      .subscribe( data => {
        this.testimonios = data.testimonios;
      })
  }

}
