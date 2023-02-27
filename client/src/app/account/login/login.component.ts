import { AccountService } from './../account.service';
import { AccountModule } from './../account.module';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  constructor(private accountService: AccountService, private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/shop'
  }
  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })

  }
  onSubmit() {
    this.accountService.login(this.loginForm.value).subscribe(() => {
      this.router.navigateByUrl('/shop')
    }, error => {
      console.log(error)
    })
  }
}
