import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeesComponent } from './employees/employees.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './ecom/dashboard/dashboard.component';
import { ProductComponent } from './ecom/product/product.component';
import { ProductlistComponent } from './ecom/productlist/productlist.component';
import { NavbarComponent } from './ecom/navbar/navbar.component';
import { CartComponent } from './ecom/cart/cart.component';
import { AddtutComponent } from './tutorial/addtut/addtut.component';
import { ListtutComponent } from './tutorial/listtut/listtut.component';
import { ViewtutComponent } from './tutorial/viewtut/viewtut.component';
import { RegdoctorComponent } from './doctor/regdoctor/regdoctor.component';
import { ListdoctorComponent } from './doctor/listdoctor/listdoctor.component';
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    EmployeesComponent,
    StudentsComponent,
    DashboardComponent,
    ProductComponent,
    ProductlistComponent,
    NavbarComponent,
    CartComponent,
    AddtutComponent,
    ListtutComponent,
    ViewtutComponent,
    RegdoctorComponent,
    ListdoctorComponent,
    EditdoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added,
    BrowserAnimationsModule,
    ToastModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
