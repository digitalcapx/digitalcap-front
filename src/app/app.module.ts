import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CaptacaoModule } from './captacao/captacao.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { NavbarModule } from './components/navbar/navbar.module';
import {MatIconModule} from '@angular/material/icon';
import { SidebarModule } from './components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    ReactiveFormsModule,
    CaptacaoModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    NavbarModule,
    MatIconModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
