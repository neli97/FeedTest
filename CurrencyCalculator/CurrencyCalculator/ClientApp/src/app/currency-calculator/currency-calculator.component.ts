import { Component, OnInit } from '@angular/core';

import { CurrencyServiceService } from '../currency-service.service';
import { HttpClient  } from '@angular/common/http';

import {FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 


@Component({
  selector: 'app-currency-calculator',
  templateUrl: './currency-calculator.component.html',
  styleUrls: ['./currency-calculator.component.scss'],
})
export class CurrencyCalculatorComponent implements OnInit {


  currencyForm: FormGroup;

  currencyList: Array<any> = [];

  constructor(private curFB: FormBuilder, private _service: CurrencyServiceService) {
    this.currencyForm = this.curFB.group({
      currency: ['', Validators.required]
    })
   }

  ngOnInit() {
    this._service.getCurrency().subscribe( 
      data => this.currencyList = data
  ) 
  }

}
