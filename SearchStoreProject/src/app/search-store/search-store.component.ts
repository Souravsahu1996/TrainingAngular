import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from "src/app/search-store/shared/store-service.service";

@Component({
  selector: 'app-search-store',
  templateUrl: './search-store.component.html',
  styleUrls: ['./search-store.component.css'],
  providers: [StoreServiceService]
})
export class SearchStoreComponent implements OnInit {

  constructor(private storeServiceService:StoreServiceService) { }

  public todayDate : string = (new Date()).toISOString().split("T")[0];
  public tomorrowDate : string = new Date(new Date().getTime() + 86400000).toISOString().split("T")[0];
 
  ngOnInit() {
  }

}
