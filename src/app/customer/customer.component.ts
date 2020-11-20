import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer_model';
import { Product } from '../product_model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  islogin:boolean;
  product:Array<Product>;
  id:any;
  pass:any;
  fail:any;
  confirm:any;
  customer: Array<Customer>;

  constructor( private activated_route:ActivatedRoute,private user_service:UserService,  private router:Router) { this.islogin=this.user_service.islogin; }

  ngOnInit(): void {
     if(!this.islogin){this.router.navigate(['login']); }
     this.user_service.loadcustomer_all_cus().subscribe( (data)=>{this.customer=data}, (err)=>{console.log("Error getting data from Database")}   )
     // this.product= Object.entries(this.product);
  }

  delete(id){

    if(confirm("Do you want to delete?")){

    this.user_service.update_cus(id).subscribe(data=>{
    this.confirm=data
      console.log(id);
      if(!this.confirm.delete){
        let index:any;
      for(var i=0; i<this.customer.length; i++){
              if(this.customer[i]._id==id){
                this.pass="";
                this.customer.splice(i, 1);
              }
        };

      
        


        setTimeout(() => {
          this.pass="";
          this.router.navigate(['cus_home']);
        }, 800);

        this.router.navigate(['cus_home']);
      }
      else{this.fail="Fail to delete!";
    }
    
      }, (err)=>console.log(err));
  }

 else{alert("Cancelled")}



  }










}
