import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Product } from '../product_model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category.model';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  islogin: any;

  constructor( private activated_route:ActivatedRoute,private user_service:UserService,  private router:Router) { this.islogin=this.user_service.islogin; }
  formFer: FormGroup;
  success: boolean;
  product: Array<Product>;
  category: Array<Category>;
   id:any;
   pass:any;
   fail:any;
  ngOnInit(): void {
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
    
     

      ///////getting product id 

     this.id = this.activated_route.snapshot.paramMap.get('id');
     this.user_service.loadproduct_byId(this.id).subscribe( (data)=>{this.product=data; console.log(); }, (err)=>console.log(err) );
     this.user_service.loadproduct_category().subscribe( (data)=>{this.category=data; console.log(data); }, (err)=>console.log(err) );
    
  }


  update(){
   
    if(confirm("Do you want to continue?")){

   let updated_pro =Object.entries(this.formFer.value);
    var obj; var new_obj={};
    for (const [key, val] of updated_pro) {
        if(val){
          new_obj[key]=val;
        }
    }

   
    new_obj['_id']=this.id;
    let get:any;
    this.user_service.loadproduct_update(new_obj).subscribe( (data)=>{
   get=data;
    if(data){
      this.pass="Successfully updated,  redirected......."
        setTimeout(() => {
          this.router.navigate(['home']);

       }, 3000);
    } else{
      this.fail="Fail to updated";
      this.router.navigate(['home']);

    }
    
    
    }, (err)=>console.log(err) );



  

  }else{alert("Cancelled")}




  }












}
