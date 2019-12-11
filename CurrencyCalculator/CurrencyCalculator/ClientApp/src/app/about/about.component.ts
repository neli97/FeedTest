import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openCurrencyCalculator(): void{

    (this.router.navigate(['currency-calculator']))

  }


}
