import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Employee } from "src/app/employees/shared/employee.model";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  selectedEmployee : Employee = new Employee();
  employeeList : Employee[];
  constructor(private httpClient : HttpClient ) { }
  PostEmployee(emp : Employee) : Observable<Array<Employee>>
  {
    var body = JSON.stringify(emp);

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post<Array<Employee>>('http://localhost:55499/api/Employees', body, {
      headers: headers
    });
  }

  getEmployeeList() 
  {
  // return this.httpClient.get<Array<Employee>>('http://localhost:55499/api/Employees');
   return this.httpClient.get<Array<Employee>>('http://localhost:55499/api/Employees').toPromise().then(x => this.employeeList=x);
  }
  SearchEmployee(empnew : Employee) : Observable<Array<Employee>>
  {
    var body = JSON.stringify(empnew);

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.put<Array<Employee>>('http://localhost:55499/api/Employees', body, {
      headers: headers
    });
  }
}
