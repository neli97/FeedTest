import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import { CurrencyService } from './currency.service';

import { Http, Headers } from '@angular/http'; 
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currencyForm: FormGroup;

  currencyList: Array<any> = [];

  latestPosts: Feed[] = [];

  constructor(private http: HttpClient, private curFB: FormBuilder, private _service: CurrencyService) {
    this.currencyForm = this.curFB.group({
      currency: ['', Validators.required]
    })
   } 
  
  ngOnInit(){
    // this.http.get<Feed[]>('http://localhost:62466/api/CalculateCurrency').subscribe(result => {  
    //   this.latestPosts = result;  
    // }, error => console.error(error));
    

    this._service.getCurrency().subscribe( 
      data => this.currencyList = data
  ) 
  }

  get city() { return this.currencyForm.get('city'); }

}

interface Feed{
  link: string;  
  title: string;  
  feedType: string;  
  author: string;  
  content: string;  
  publishDate: string; 
}

