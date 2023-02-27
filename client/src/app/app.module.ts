import { ShopModule } from './shop/shop.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';


import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ShopModule,
    MatInputModule,
    MatExpansionModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
