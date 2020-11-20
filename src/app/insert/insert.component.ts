import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Product } from '../product_model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category.model';
import { UserService } from '../user.service';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  formFer: FormGroup;
  success: boolean;
  product: Array<Product>;
  category: Array<Category>;
   id:any;
   pass:any;
   fail:any;
  islogin: boolean;
  constructor( private activated_route:ActivatedRoute,private user_service:UserService,  private router:Router) { this.islogin=this.user_service.islogin; }


  ngOnInit(): void {
    this.user_service.loadproduct_category().subscribe( (data)=>{this.category=data; console.log(data); }, (err)=>console.log(err) );
    if(!this.islogin){this.router.navigate(['login']); }

    this.formFer= new FormGroup({

      name: new FormControl("", [
          Validators.required

         ]),

      price: new FormControl("", [
        Validators.required
       ]),

       year: new FormControl("", [
        Validators.required
       ]),

       quantity: new FormControl("", [
        Validators.required
       ]),

       model: new FormControl("", [
        Validators.required
       ]),

       display: new FormControl("", [
        Validators.required
       ]),

       memory: new FormControl("", [
        Validators.required
       ]),

       cpu: new FormControl("", [
        Validators.required
       ]),

       category_id: new FormControl("", [
        Validators.required
       ]),

       desc: new FormControl("", [
        Validators.required
       ]),

       short_desc: new FormControl("", [
        Validators.required
       ]),

       img: new FormControl("", [
        Validators.required
       ]),

       type: new FormControl("", [
        Validators.required
       ])
    
      });
  }



insert(){

  if(confirm("Do you want to Continue?")){
    console.log(this.formFer.value);
    this.user_service.insert(this.formFer.value).subscribe( (data)=>{
    if(data){
       this.pass="Product Successfully added,  redirected......."
         setTimeout(() => {
           this.router.navigate(['home']);
 
        }, 3000);
     } else{
       this.fail="Error adding new Product";
       this.router.navigate(['home']);
 
     }
     
     
     }, (err)=>console.log(err) );

  }

}










}
