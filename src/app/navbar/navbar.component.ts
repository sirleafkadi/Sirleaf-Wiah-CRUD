import { Component, OnInit, OnChanges, DoCheck} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  islogin:boolean;
  constructor(private user_service:UserService,  private router:Router) {  this.islogin=false;}
    ngOnInit(): void {
 }
  ngDoCheck(): void
  {

    this.islogin=this.user_service.islogin;
  }





}
