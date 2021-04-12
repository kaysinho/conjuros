import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email/email.service'

declare var Swal : any
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form = {
    name : '',
    email : '',
    message: ''
  }
  constructor(private email:EmailService) { }

  ngOnInit(): void {
  }

  send(){
    console.log(this.form)
    this.email.contactUs(this.form).subscribe( data => {
      Swal.fire(
        'Hemos recibido su mensaje!',
        'Pronto nos comunicaremos con usted!',
        'success'
      )
    }, err => {
      Swal.fire(
        'Hemos recibido su mensaje!',
        'Pronto nos comunicaremos con usted!',
        'success'
      )
    })
  }
}
