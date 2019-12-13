import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';

import {MatSelectModule} from '@angular/material/select';

import {MatSidenavModule} from '@angular/material/sidenav';
import { CurrencyCalculatorComponent } from './currency-calculator/currency-calculator.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MatChipsModule } from '@angular/material/chips';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { InjectionToken } from '@angular/core';
import { CurrencyServiceService } from './currency-service.service';
import { FooterComponent } from './footer/footer.component';
export const BASE_URL = new InjectionToken<string>('BASE_URL');


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HeaderComponent,
    CurrencyCalculatorComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSidenavModule,MaterialModule,
    MatSelectModule,
    HttpClientModule,
    HttpModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    { provide: BASE_URL , useValue: "http://localhost:62466/api" },
    CurrencyServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
