import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getServices():Observable<any>{
    return this.http.get("../../../assets/data/servicios.json"); 
  }

  getLinks():Observable<any>{
    return this.http.get("../../../assets/data/menu.json"); 
  }

  getTestimonios():Observable<any>{
    return this.http.get("../../../assets/data/testimonios.json"); 
  }
}
