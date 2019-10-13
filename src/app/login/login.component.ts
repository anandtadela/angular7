import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from '../util/util.service';
import { AuthService } from '../auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router, private utilservice: UtilService) { }
  public error: string;
  public username: string;
  public password: string;
  ngOnInit() {
  }
  login(form: NgForm) {

    this.auth.login(form.value.username, form.value.password)
    .pipe(first())
    .subscribe(
      result => this.router.navigate(['welcome']),
      err => this.error = 'Could not authenticate'
    );
  }

}
