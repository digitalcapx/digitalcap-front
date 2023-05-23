import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logged: boolean | undefined;

  constructor(private router: Router) {
    this.logged = false;
  }

  ngOnInit(): void {
    if(localStorage.getItem('logged')){
      this.logged = Boolean(localStorage.getItem('logged'));
    }
  }

  logout() {
    console.log('saiu')
    this.logged = false;
    localStorage.setItem('logged','false');
    this.router.navigate(['login']);
  }

}
