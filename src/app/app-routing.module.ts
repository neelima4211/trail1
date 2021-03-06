import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddAppartmentComponent } from './add-appartment/add-appartment.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  // change this later to navigateByUrl
  {path:'login/signup',component:SignupComponent},
  {path:'addapparment',component:AddAppartmentComponent},
  {path:'login',component:LoginComponent},
  {path:"",redirectTo:'home',pathMatch:'full'},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:'**',component:NoPageFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
