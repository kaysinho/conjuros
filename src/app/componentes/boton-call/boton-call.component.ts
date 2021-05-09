import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-call',
  templateUrl: './boton-call.component.html',
  styleUrls: ['./boton-call.component.css']
})
export class BotonCallComponent implements OnInit {
  @Input() phonenumber: string
  constructor() { }

  ngOnInit(): void {
  }

}
