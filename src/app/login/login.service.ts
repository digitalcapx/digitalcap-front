import { Injectable } from '@angular/core';
import { Login } from './login-model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router,
              private toast: ToastrService) { }

  login(login: Login): boolean {
    if(login.email == 'admin' && login.password == 'admin'){
      this.toast.success(login.email, 'Bem vindo novamente!', 
          {timeOut:  2500, progressBar: true});
      localStorage.setItem('logged','true');
      this.router.navigate(['captacao']);
      return true;
    } 
    this.toast.error('Usuário não cadastrado.', '', {timeOut:  2500, progressBar: true});
    return false;
  }
}
