import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm : FormGroup;


  constructor() { }
  save():void
  {
    console.log(this.customerForm.value);
    console.log(this.customerForm.get('firstName').value);
    console.log(this.customerForm.get('firstName').touched);
  }

  ngOnInit() : void {
    this.customerForm = new FormGroup({
      firstName:new FormControl(),
      lastName:new FormControl(),
      email:new FormControl(),
      sendCatalog:new FormControl()
    });
  }
  

}
