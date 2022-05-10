import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { LoginComponent } from './paginas/login/login.component';
import { HorariosComponent } from './paginas/horarios/horarios.component';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DashboardComponent,
    LoginComponent,
    HorariosComponent,
  
  ],
  imports: [
    BrowserModule,QuicklinkModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
