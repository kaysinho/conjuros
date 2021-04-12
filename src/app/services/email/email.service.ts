import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  contactUs(form: any) {
    let body = {
      to: "maestroisrael@encantodelamor.com",
      subject: "Mensaje de Encanto de Amor",
      html: `${form.email} dice: ${form.message}`,
      company: "Encanto de Amor",
      sendername: form.name
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-apikey': 'a3fdf926dac4b38b07c551316c98914232a1e',
        'Cache-Control': 'no-cache'

      })
    }

    return this.http.post('https://elencantodeamor-8d2d.restdb.io/mail', body, httpOptions)
  }
}
