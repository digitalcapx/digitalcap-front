import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Login } from './login-model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private loginService: LoginService) {
    this.formLogin = new FormGroup({});
  }

  ngOnInit(): void {
    this.createForm(new Login);
  }

  createForm(login: Login) {
    this.formLogin = new FormGroup({
      email: new FormControl(login.email),
      password: new FormControl(login.password),
    })
  }

  onSubmit() {
    this.loginService.login(this.formLogin.value);
  }

}
