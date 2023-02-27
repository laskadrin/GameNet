import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatExpansionModule,
    NgxPaginationModule,
  ],
  exports: [
    MatInputModule,
    MatExpansionModule,
    NgxPaginationModule
  ]
})
export class SharedModule { }
