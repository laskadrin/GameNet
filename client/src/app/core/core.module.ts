import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatExpansionModule
  ],
  exports: [HeaderComponent]

})
export class CoreModule { }
