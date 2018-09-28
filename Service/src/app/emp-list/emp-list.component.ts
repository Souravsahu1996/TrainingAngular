import { Component, OnInit } from '@angular/core';
import { EmpService } from "src/app/emp.service";

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private sourav:EmpService) { }

  ngOnInit() {
    this.emp=this.sourav.getemployee();
  }
  public emp=[];
}
