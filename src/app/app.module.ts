import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CategorylistComponent } from './pages/categorylist/categorylist.component';
import { CategoryorderComponent } from './pages/categoryorder/categoryorder.component';
import { RestaurantOrderComponent } from './pages/restaurant-order/restaurant-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategorylistComponent,
    CategoryorderComponent,
    RestaurantOrderComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterTestingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
