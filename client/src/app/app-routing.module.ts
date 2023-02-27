import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
