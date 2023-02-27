import { ShopComponent } from './../../shop/shop.component';
import { ShopParams } from './../../shared/Models/shopParams';
import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public shopComponent: ShopComponent,
    public shopParams: ShopParams
  ) { }

  ngOnInit() {

  }

}
