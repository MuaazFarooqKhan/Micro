import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopingcartComponent } from './components/shopping-cart/shopingcart/shopingcart.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: ShopingcartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PagenotfoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
