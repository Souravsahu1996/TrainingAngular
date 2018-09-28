import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from "src/app/search-store/shared/store-service.service";
import { Store } from "src/app/search-store/shared/store.model";
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
   
  str : Store =new Store();
  constructor(private storeServiceService:StoreServiceService) { }
  recievedData : Array<Store> = new Array<Store>();
  searchData :  Array<Store>;
  num : number;
  public todayDate : string = (new Date()).toISOString().split("T")[0];
  public tomorrowDate : string = new Date(new Date().getTime() + 86400000).toISOString().split("T")[0];
  errormsg:string;
  stored : Store=new Store();
  search1 : Array<Store> = new  Array<Store>();
  
  ngOnInit() {
    this.str.Location = "Bhubaneswar";
     this.str.CheckOut = this.tomorrowDate;
    this.str.CheckIn = this.todayDate;
    this.str.RoomType="Single-AC";
    this.storeServiceService.GetSearchs();
  //   .subscribe( data =>{
  //     this.search1=data;
  //   },
  // error => {

  // });
  }
  show()
  {
    debugger;
    //  this.num= this.searchData.length;
   this.storeServiceService.GetSearchs();
     
  }
  onSubmit(form : NgForm)
  {
    
    console.log(form.value);
    
   this.storeServiceService.PostSearchStore(form.value)
      .subscribe( data => { 
        
        this.recievedData = data;
      },
    error => {
     console.log(error);
    });
    
  }

}



