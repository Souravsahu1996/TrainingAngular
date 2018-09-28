import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from "src/app/customers/customer-list/customer-list.component";
import { CustomerListNewComponent } from "src/app/customers/customer-list-new/customer-list-new.component";

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: 'newlist',
    component : CustomerListNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
