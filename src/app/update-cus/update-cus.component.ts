import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-cus',
  templateUrl: './update-cus.component.html',
  styleUrls: ['./update-cus.component.css']
})
export class UpdateCusComponent implements OnInit {
  id: any;
 formFer: any;
  pass: string;
 fail: string;
  not_match:boolean;
  extra:any;
  registered:boolean;
  error:boolean;
  islogin: any;

  constructor( private activated_route:ActivatedRoute,private user_service:UserService,  private router:Router) { this.islogin=this.user_service.islogin; }


  ngOnInit(): void {
    if(!this.islogin){this.router.navigate(['login']); }
    this.id = this.activated_route.snapshot.paramMap.get('id');

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


    
  update(){
   
    if(confirm("Do you want to continue?")){

   let updated_cus =Object.entries(this.formFer.value);
    var obj; var new_obj={};
    for (const [key, val] of updated_cus) {
        if(val){
          new_obj[key]=val;
        }
    }

   
    new_obj['_id']=this.id;
    let get:any;
    this.user_service.update_cus(new_obj).subscribe( (data)=>{
   get=data;
    if(data){
      this.pass="Successfully updated,  redirected......."
        setTimeout(() => {
          this.router.navigate(['cus_home']);

       }, 3000);
    } else{
      this.fail="Fail to updated";
      this.router.navigate(['cus_home']);

    }
    
    
    }, (err)=>console.log(err) );



  

  }else{alert("Cancelled")}




  }

















}
