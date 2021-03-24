import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare var M:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'altares';
  constructor(private router:Router){
  }

  ngOnInit(){
    this.router.events.subscribe((evt) => {
			if (!(evt instanceof NavigationEnd)) {
				setTimeout(() => this.inicializarComponentes(), 1000);
				return;
			}
			window.scrollTo(0, 0);
		});
  }

  inicializarComponentes(){
    let elems = document.querySelectorAll('.slider');
    let instances = M.Slider.init(elems, {});

    let elems2 = document.querySelectorAll('.sidenav');
    let instances2 = M.Sidenav.init(elems2, {});
  }
}
