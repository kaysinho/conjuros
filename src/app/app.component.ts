import { Component } from '@angular/core';
declare var M:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'altares';

  constructor(){
    
    setTimeout(() => {
      this.inicializarComponentes()
    }, 1000);
  }

  inicializarComponentes(){
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {});
  }
}
