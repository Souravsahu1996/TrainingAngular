import { Component, OnInit } from '@angular/core';
import { EmpService } from "src/app/emp.service";

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  constructor(private sourav:EmpService) { }

  ngOnInit() {
    this.emp=this.sourav.getemployee();
  }
  public emp=[];
}
