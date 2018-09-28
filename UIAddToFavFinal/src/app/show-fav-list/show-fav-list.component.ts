import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-show-fav-list',
  templateUrl: './show-fav-list.component.html',
  styleUrls: ['./show-fav-list.component.css']
})
export class ShowFavListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Logout() {
    localStorage.removeItem('loggingdetails');
    localStorage.removeItem('currentuser');
    localStorage.removeItem('bookinghotel');
    this.router.navigate(['/BookMyRoom']);
  }

}
