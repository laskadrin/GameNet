import { AccountModule } from './../../account/account.module';
import { IUser } from './../../shared/Models/user';
import { ShopComponent } from './../../shop/shop.component';
import { ShopParams } from './../../shared/Models/shopParams';
import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<IUser>
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$
  }

  logout() {
    this.accountService.logout();
  }

}
