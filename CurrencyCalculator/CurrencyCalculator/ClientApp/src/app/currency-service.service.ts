import { Injectable, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import 'rxjs/add/operator/map'; 
//import 'rxjs/add/operator/catch'; 
//import 'rxjs/add/observable/throw'; 
@Injectable()
export class CurrencyServiceService {

  myAppUrl: string = "http://localhost:62466/api/Currency/"; 

  constructor(private _http: HttpClient) {
    
   
   }

   getCurrency() { 
     return this._http.get(this.myAppUrl + 'GetCurrencies');
        //.map(res => res.json()) 
        //.catch(this.errorHandler); 
  }

  /*errorHandler(error: Response) { 
  console.log(error); 
  return Observable.throw(error); 
  }*/
} 

