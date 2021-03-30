import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  @Input() title: string
  @Input() description: string
  @Input() phonenumber: string

  constructor() { }

  ngOnInit(): void {
  }

}
