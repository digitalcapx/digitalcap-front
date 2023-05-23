import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptacaoComponent } from './captacao.component';
import { NavbarModule } from '../components/navbar/navbar.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { SidebarModule } from '../components/sidebar/sidebar.module';


@NgModule({
  declarations: [
    CaptacaoComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    MatSidenavModule,
    MatIconModule,
    SidebarModule
  ],
  exports: [
    CaptacaoComponent
  ]
})
export class CaptacaoModule { }
