import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formFer: FormGroup;
  success:boolean=false;
  error:boolean=false;
  email:String;
  password:String;

  constructor(private user_service:UserService,  private router:Router) { this.email="admin", this.password="password"; }
    ngOnInit(): void {

    this.formFer= new FormGroup({

      email: new FormControl("", [
          Validators.required
         ]),

      password: new FormControl("", [
        Validators.required
       ])
    
      });


  }


    
  async login(){
    let is_login:any;

    if(this.formFer.value.email==this.email && this.formFer.value.password==this.password){
        this.user_service.islogin=true;
        this.success=true;
        this.error=false;
      
        
        setTimeout(()=>{
          this.user_service.islogin=true;
         this.router.navigate(['home']);
       }, 1800);


       }
             
       else{
         this.error=true;
         this.success=false;
      }





 }














}
