import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import{LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { InsertComponent } from './insert/insert.component';
const routes: Routes = [

      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'home', component:HomeComponent},
      {path:'update', component:UpdateComponent},
      {path:'insert', component:InsertComponent},
    
      {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
