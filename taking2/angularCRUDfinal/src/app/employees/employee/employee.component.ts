import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/employees/shared/employee.service";
import{NgForm} from '@angular/forms';
import { Employee } from "src/app/employees/shared/employee.model";




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  
})
export class EmployeeComponent implements OnInit {
  emp : Employee =new Employee();
   empcode : string;
  //  checkin : Date;
  //  checkout : Date;
  constructor(private employeeService:EmployeeService) { }
   recievedData : Array<Employee> = new Array<Employee>();
   searchData :  Array<Employee>  ;
  ngOnInit() {
  }
  show()
  {
    this.employeeService.SearchEmployee(this.emp).subscribe( data =>{
      this.searchData = data;
      console.log(this.searchData);
    },
  error => {
    console.log(error);
  });
    console.log(JSON.stringify(this.emp));
  }
  onSubmit(form : NgForm)
  {
    
    console.log(form.value);
    
   this.employeeService.PostEmployee(form.value)
      .subscribe( data => { 
        
        this.recievedData = data;
      },
    error => {
     console.log(error);
    });
    
  }
}
