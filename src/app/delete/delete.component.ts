import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id:any;
  pass:any;
  fail:any;
  confirm:any;

  constructor(private activated_route:ActivatedRoute, private user_service:UserService, private router:Router) { }

  ngOnInit(): void {
  }


  delete(id){
    this.user_service.delete(id).subscribe(data=>{
    this.confirm=data
    
    
    
    }, (err)=>console.log(err));
  }






}
