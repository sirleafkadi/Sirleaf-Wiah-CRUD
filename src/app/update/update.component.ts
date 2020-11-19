import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import { Product } from '../product_model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }
  formFer: FormGroup;
  success: boolean;
  ngOnInit(): void {
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

       model: new FormControl("", [
        Validators.required
       ]),

       display: new FormControl("", [
        Validators.required
       ]),


       category: new FormControl("", [
        Validators.required
       ]),


       memory: new FormControl("", [
        Validators.required
       ]),

       cpu: new FormControl("", [
        Validators.required
       ]),


    
      });
  }


  update(){
    
  }















}
