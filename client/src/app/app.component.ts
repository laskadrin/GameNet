import { AccountService } from 'src/app/account/account.service';
import { IPagination } from './shared/Models/pagination';
import { IProduct } from './shared/Models/product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'GameNet';
  products: IProduct[];




  constructor(private http: HttpClient, private accountService: AccountService) { }

  ngOnInit() {

    const token = localStorage.getItem('token');
    if (token) {
      this.accountService.loadCurrentUser(token).subscribe(() => {
        console.log('loaded user');
      }, error => {
        console.log(error)
      })
    }
    this.http.get('http://localhost:5000/api/products').subscribe((response: IPagination) => {
      this.products = response.data;
    }, error => console.log(error))

  }
}
