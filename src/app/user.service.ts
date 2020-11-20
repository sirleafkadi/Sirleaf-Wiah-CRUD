import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './product_model';
import {Customer} from './customer_model';
import { Observable } from 'rxjs';
import { Category } from './category.model';

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
loadproduct_byId(id:any): Observable<Product[]>{
  return this.http_client.get <Product[]>("http://localhost:9090/product/get/"+id);
}

loadproduct_category(): Observable<Category[]>{
  return this.http_client.get <Category[]>("http://localhost:9090/category/all");
}


loadproduct_update(update:any): Observable<any>{
  return this.http_client.put("http://localhost:9090/product/update",update);
}


delete(id):Observable<any>{
  return this.http_client.delete("http://localhost:9090/product/delete/"+id);
  }

  insert(data:any):Observable<any>{
    return this.http_client.post("http://localhost:9090/product/insert",data,httpOptions);
  }

  loadcustomer_all_cus(): Observable<Product[]>{
    return this.http_client.get<Product[]>("http://localhost:9090/customer/customers");
   }
   delete_cus(id):Observable<any>{
    return this.http_client.delete("http://localhost:9090/customer/delete/"+id);
    }
  
    add_cus(customer:any): Observable<any>{
      return this.http_client.post<any>("http://localhost:9090/customer/register", customer, httpOptions);
}

update_cus(update:any): Observable<any>{
  return this.http_client.put("http://localhost:9090/customer/update",update);
}



}
