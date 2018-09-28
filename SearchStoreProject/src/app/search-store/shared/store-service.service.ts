import { Injectable } from '@angular/core';
import { Store } from "src/app/search-store/shared/store.model";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})

export class StoreServiceService {
  selectedStore :Store= new Store;
  storeList : Store[];
  constructor(private httpClient : HttpClient ) { }
  PostSearchStore(str :Store ) : Observable<Array<Store>>
  {
    var body = JSON.stringify(str );

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post<Array<Store>>('http://localhost:57842/api/SearchStores', body, {
      headers: headers
    });
  }
  GetSearchs() 
  {
  // return this.httpClient.get<Array<Store>>('http://localhost:57842/api/SearchStores');
  return this.httpClient.get<Array<Store>>('http://localhost:57842/api/SearchStores').toPromise().then(x => this.storeList=x);
  }
  Searching(strnew : Store) : Observable<Array<Store>>
  {
    var body = JSON.stringify(strnew);

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.put<Array<Store>>('http://localhost:57842/api/SearchStores', body, {
      headers: headers
    });
  }
}
