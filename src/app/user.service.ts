import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './product_model';
import {Customer} from './customer_model';
import { Observable } from 'rxjs';
const httpOptions = { 
  headers: new HttpHeaders ({ 'Content-Type': 'application/json'}) 

};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public islogin:boolean;
  public cur_user:String;
  customer:Array<Customer>;
  product:Array<Product>;

  


  constructor(private http_client: HttpClient) { this.cur_user="";}


  loadproduct_all(): Observable<Product[]>{
    return this.http_client.get<Product[]>("http://localhost:9090/product/getall");
}
  














}
