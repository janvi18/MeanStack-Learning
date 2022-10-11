import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';
import { ListdoctorComponent } from './doctor/listdoctor/listdoctor.component';
import { CartComponent } from './ecom/cart/cart.component';
import { DashboardComponent } from './ecom/dashboard/dashboard.component';
import { NavbarComponent } from './ecom/navbar/navbar.component';
import { ProductComponent } from './ecom/product/product.component';
import { ProductlistComponent } from './ecom/productlist/productlist.component';
import { EmployeechartComponent } from './employeechart/employeechart.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "product", component: ProductComponent },
  { path: "productlist", component: ProductlistComponent },
  { path: 'cart', component: CartComponent },
  { path: 'regdoctor', component: ListdoctorComponent },
  { path: 'listdoctor', component: ListdoctorComponent },
  { path: 'editdoctor/:id', component: EditdoctorComponent },
  { path: 'logindoctor', component: ListdoctorComponent },
  {path:'chart',component:EmployeechartComponent},
  {path:'pipe',component:PipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
