import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareComponent } from './care/care.component';
import{CaredetailsComponent} from'./caredetails/caredetails.Component';
import { IcuComponent } from "src/app/care/icu/icu.component";
import { HeartComponent } from "src/app/heart/heart.component";


const routes: Routes = [
{ path: 'Home', component:HomeComponent},
{ path: 'Care', component:CareComponent, children :[
  {path : 'Icu', component:IcuComponent},  
  {path:'Heart', component:HeartComponent},
  {path :':name', component: CaredetailsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[HomeComponent,CareComponent,CaredetailsComponent];
