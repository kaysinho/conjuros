import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { menu_endpoint, servicios_endpoint, testimonios_endpoint } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getServices():Observable<any>{
    return this.http.get(servicios_endpoint); 
  }

  getLinks():Observable<any>{
    return this.http.get(menu_endpoint); 
  }

  getTestimonios():Observable<any>{
    return this.http.get(testimonios_endpoint); 
  }
}
