import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserComponent} from '../app/user/user.component';
import {LoginComponent} from '../app/login/login.component';
import { HeaderComponent } from './header/header.component';
import { CurrencyCalculatorComponent } from './currency-calculator/currency-calculator.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'user', component: UserComponent },

  {path: 'login', component: LoginComponent},

  {path: 'header', component: HeaderComponent },
  
  {path: 'currency-calculator', component: CurrencyCalculatorComponent},

  {path: 'about', component: AboutComponent},

  {path: 'contact', component: ContactComponent},

  {path: '', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
