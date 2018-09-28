import { Component, OnInit, Input} from '@angular/core';
import { User } from "src/app/user.model";


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
    user: User;
    name : string;
   // @Input('user') userobj: User;
  constructor() { }
   show()
   {
   
   }
   set()
   {

   }
   
  ngOnInit() {
    this.user = new User();
  }

}
