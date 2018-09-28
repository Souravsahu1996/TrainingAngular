import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }
  getEmployees()
  {
    return[
      {"id":1,"name":'sourav',"age":22},
      {"id":2,"name":'lipun',"age":24},
      {"id":3,"name":'lipi',"age":23},
      {"id":4,"name":'rimun',"age":19}
    ];
  }
}
