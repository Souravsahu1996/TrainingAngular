import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
   datemessage: string

  constructor() {
    setInterval(()=>{let current=new Date();
      this.datemessage=current.toDateString()+' '+current.toLocaleTimeString();} , 1000);
    
   }

  ngOnInit() {
  }

}
