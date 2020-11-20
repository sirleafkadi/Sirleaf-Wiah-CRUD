import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer_model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  islogin: any;

  constructor( private activated_route:ActivatedRoute,private user_service:UserService,  private router:Router) { this.islogin=this.user_service.islogin; }
  formFer:FormGroup;
  not_match:boolean;
  extra:any;
  registered:boolean;
  error:boolean;
  customer:Customer;

  ngOnInit(): void {
    if(!this.islogin){this.router.navigate(['login']); }
    this.formFer= new FormGroup({
      name : new FormControl("",[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(13),
     
      ]),

      email : new FormControl("",[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")
      ]),


      password : new FormControl("",[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12),
      ]),

      confirm : new FormControl("",[
        Validators.required,
       
      ])

  })



  }




    
  async add(){
    let is_registered:any;
 if(this.formFer.value.password == this.formFer.value.confirm){
           this.not_match=false;
           delete this.formFer.value.confirm;
          this.user_service.add_cus(this.formFer.value).subscribe(
          data=>{ is_registered=data;
            
                if(is_registered.registered){console.log("Customer added successfully!") 
                   this.error=false;
       
                     setTimeout(() => {
        
                     this.router.navigate(['cus_home']);
               }, 2300);

            }else{ console.log("Unable to register") }
            this.registered =false;
            this.error=true;
            
            }
             
            );
  
             
  }

      else { this.not_match=true; }


  }







}
