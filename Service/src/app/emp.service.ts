import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }

  getemployee()
  {
    return [
      {"id":123,"name":"sourav","age":12},
      {"id":123,"name":"sourav","age":12},
      {"id":123,"name":"sourav","age":12},
      {"id":123,"name":"sourav","age":12}
    ];
  }
}
