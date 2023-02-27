import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

import { NgxPaginationModule } from 'ngx-pagination';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatExpansionModule,
    NgxPaginationModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  exports: [
    MatInputModule,
    MatExpansionModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
