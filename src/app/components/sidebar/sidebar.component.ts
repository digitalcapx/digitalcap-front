import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  username: string = 'Jobson Batista';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.setItem('logged','false')
    this.router.navigate(['login']);
  }

}
