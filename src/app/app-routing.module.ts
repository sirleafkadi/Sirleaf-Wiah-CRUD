import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import{LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { InsertComponent } from './insert/insert.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdateCusComponent } from './update-cus/update-cus.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
const routes: Routes = [

      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'home', component:HomeComponent},
      {path:'update/:id', component:UpdateComponent},
      {path:'insert', component:InsertComponent},
      {path:'cus_home', component:CustomerComponent},
      {path:'update_cus/:id', component:UpdateCusComponent},
      {path:'new_cus', component:AddCustomerComponent},
      {path:'login', component:LoginComponent},
      {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
