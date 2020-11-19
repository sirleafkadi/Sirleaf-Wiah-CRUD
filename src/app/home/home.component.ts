import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import { Product } from '../product_model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  islogin:boolean;
  product:Array<Product>;
  constructor(private user_service:UserService,  private router:Router) { this.islogin=this.user_service.islogin; }

  ngOnInit(): void {
    // if(!this.islogin){this.router.navigate(['login']); }
    this.user_service.loadproduct_all().subscribe( (data)=>{this.product=data}, (err)=>{console.log("Error getting data from Database")}   )
    this.product= Object.entries(this.product);
    this.user_service.product=this.product;
  }






}
