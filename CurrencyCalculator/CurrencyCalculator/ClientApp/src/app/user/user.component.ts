import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';
import {Router} from '@angular/router';  


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, ) { }

  openCurrencyCalculator(): void{

    (this.router.navigate(['currency-calculator']))

  }

  ngOnInit() {
  }

}
