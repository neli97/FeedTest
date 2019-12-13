import { Component, OnInit } from '@angular/core';
import { CurrencyServiceService, CurrV } from '../currency-service.service';
import { HttpClient  } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-currency-calculator',
  templateUrl: './currency-calculator.component.html',
  styleUrls: ['./currency-calculator.component.scss'],
})
export class CurrencyCalculatorComponent implements OnInit {

  currencyForm: FormGroup;
  //CurruncyTo: string = '';
  //CurrencyFrom: string = '';
  //ValueToCalc: number;
  result: number;

  currencyList: Array<any> = null;



  constructor(private curFB: FormBuilder, private _service: CurrencyServiceService) {

    this.currencyForm = this.curFB.group({
      CurrencyTo: [null, Validators.required],
      CurrencyFrom: [null, Validators.required],
      ValueToCalc: [null, Validators.required],
      result: [null, Validators.required]
    })
    this.currencyForm.valueChanges.subscribe(_ => {
      console.log(_);
    });
   }
  ngOnInit() {
    this._service.getCurrency().subscribe( 
      data => {
        this.currencyList = <Array<any>>data;
      }
    )
  }

  ButtonClicked() {
    this._service.postCurrency(this.currencyForm.value).subscribe(data => { this.result = <number>data });
    console.log(this.currencyForm.value);
    console.log(this.result);
    }
}


