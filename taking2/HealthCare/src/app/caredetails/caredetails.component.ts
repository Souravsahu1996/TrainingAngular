import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-caredetails',
  templateUrl: './caredetails.component.html',
  styleUrls: ['./caredetails.component.css']
})
export class CaredetailsComponent implements OnInit {
  public careid;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let id= this.route.snapshot.paramMap.get('name');
    this.careid=id;
  }

}
