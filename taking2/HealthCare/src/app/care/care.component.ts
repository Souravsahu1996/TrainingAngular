import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';

@Component({
  selector: 'app-care',
  templateUrl: './care.component.html',
  styleUrls: ['./care.component.css']
})
export class CareComponent implements OnInit {
  cares  =[
    {"id":1, "name": "Icu"},
    {"id":2, "name": "Heart"},
    {"id":3, "name": "Orthopedict"},
    {"id":4, "name": "Emergency"}

  ];

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onselect(value)
  {
   this.router.navigate(['/Care', value.name]);   
  }

}
