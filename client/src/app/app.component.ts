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




  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/products').subscribe((response: IPagination) => {
      this.products = response.data;
    }, error => console.log(error))
  }
}
