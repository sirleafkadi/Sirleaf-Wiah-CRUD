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
  id:any;
  pass:any;
  fail:any;
  confirm:any;
  constructor(private user_service:UserService,  private router:Router) { this.islogin=this.user_service.islogin; }

  ngOnInit(): void {
    if(!this.islogin){this.router.navigate(['login']); }
    this.user_service.loadproduct_all().subscribe( (data)=>{this.product=data}, (err)=>{console.log("Error getting data from Database")}   )
    // this.product= Object.entries(this.product);
   
  }


  delete(id){

    if(confirm("Do you want to delete?")){

    this.user_service.delete(id).subscribe(data=>{
    this.confirm=data

      if(!this.confirm.delete){
        let index:any;
      for(var i=0; i<this.product.length; i++){
              if(this.product[i]._id==id){
                this.pass="";
                this.product.splice(i, 1);
              }
        };

        console.log(index);
        console.log(this.product);
        


        setTimeout(() => {
          this.pass="";
          this.router.navigate(['home']);
        }, 800);

        this.router.navigate(['home']);
      }
      else{this.fail="Fail to delete!";
    }
    
      }, (err)=>console.log(err));
  }

 else{alert("Cancelled")}



  }


}
