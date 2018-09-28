import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/employees/shared/employee.service";
import { Employee } from "src/app/employees/shared/employee.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
empList : Array<Employee>
  ngOnInit() {
     this.employeeService.getEmployeeList();
//      .subscribe( data => this.empList = data,error => {
//       console.log(error);
//     }); 
//    this.employeeService.getEmployeeList();
  }

}
