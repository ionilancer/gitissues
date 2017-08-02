import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {


  constructor() {console.log("hola header");

  }
  values="";


  onKey(event:any) { // without type info
    this.values += event.target.value + ' | ';
  }
  ngOnInit() {
  }

}
