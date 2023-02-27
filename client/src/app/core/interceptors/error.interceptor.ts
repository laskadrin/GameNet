import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, delay, Observable, throwError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(

      catchError(error => {
        if (error) {

          if (error.status === 400) {
            if (error.error.errors) {
              throw error.error;
            }
            else {
              this.openSnackBar('(' + error.error.statusCode + '): ' + error.error.message, 'Ok');
            }

          }
          if (error.status === 401) {
            this.openSnackBar('(' + error.error.statusCode + '): ' + error.error.message, 'Ok');
          }

          if (error.status === 404) {
            this.router.navigateByUrl('/not-found')
          }
          if (error.status === 500) {
            const navigationExtras: NavigationExtras = { state: { error: error.error } };
            this.router.navigateByUrl('/server-error', navigationExtras)
          }
          return throwError(error);
        }
      })
    );
  }
}
