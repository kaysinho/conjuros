import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private route:ActivatedRoute ) { }

  ngOnInit(): void {



  }

  ngAfterViewInit(){
    this.route.paramMap.subscribe( paramMap => {
      let section = paramMap.get('section');
      setTimeout(() => {
        document.location.hash = section;
        
      }, 500);
  })
  }

}
