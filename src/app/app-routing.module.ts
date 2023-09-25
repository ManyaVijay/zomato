import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategorylistComponent } from './pages/categorylist/categorylist.component';
import { RestaurantOrderComponent } from './pages/restaurant-order/restaurant-order.component';
import { CategoryorderComponent } from './pages/categoryorder/categoryorder.component';

const routes: Routes = [
  {
    path:'',
    component: CategorylistComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'foodCategory',
    component: CategorylistComponent
  },
  {
    path:'restaurant-items/:categoryname',
    component: RestaurantOrderComponent
  },
  {
    path:'create-order',
    component: CategoryorderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
