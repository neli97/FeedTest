import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';


//import { CurrencyCalculatorComponent } from 'src/app/currency-calculator/currency-calculator.component';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
//import { ContentType } from '@angular/http/src/enums';
//import 'rxjs/add/operator/catch'; 
//import 'rxjs/add/observable/throw';


export interface CurrV {
  CurrencyTo: string;
  CurrencyFrom: string;
  ValueToCalc: number;
  result: number;
}

@Injectable()
export class CurrencyServiceService {

  myAppUrl: string = "http://localhost:62466/api/Currency/";

  currVData: CurrV[];

  constructor(private _http: HttpClient) { 
   }

   getCurrency() { 
     return this._http.get(this.myAppUrl + 'GetCurrencies');
        //.map(res => res.json()) 
        //.catch(this.errorHandler); 
  }

  postCurrency(data) {
    return this._http.post(this.myAppUrl + 'CalculateCurrency', data);
  }

  errorHandler(error: Response) { 
  console.log(error); 
  return Observable.throw(error); 
  }
} 

