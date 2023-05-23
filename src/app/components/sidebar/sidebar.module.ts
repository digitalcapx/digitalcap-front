import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [ SidebarComponent ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [ SidebarComponent ]
})
export class SidebarModule { }
