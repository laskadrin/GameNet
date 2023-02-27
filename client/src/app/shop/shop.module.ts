import { ShopRoutingModule } from './shop-routing.module';
import { ShopParams } from './../shared/Models/shopParams';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,

  ],
  exports: [
    ShopComponent
  ],
  providers: [ShopComponent,
    ShopParams]

})
export class ShopModule { }
