import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CounterService } from './services/counter.service';
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { JsonStringPipe } from './Pipes/jsonString.pipe';
import { JobService } from './services/job.service';
import { DepartmentService } from './services/department.service';
import { UserService } from './services/user.service';
import { PersonService } from './services/person.service';
import { ErrorComponent } from './Components/error/error.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AddAddressComponent } from './Components/add-address/add-address.component';
import { HomeComponent } from './Components/home/home.component';
import { DetailsComponent } from './Components/details/details.component';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { UploadComponent } from './Components/upload/upload.component';




const routes : Routes =[

  {path:'' , component:LoginComponent},
  { path:'register' , component : RegisterComponent},
  { path:'home' , component : HomeComponent},
  { path:'add' , component : AddAddressComponent},
  { path:'details/:id' , component : DetailsComponent},
  { path:'**' , component : ErrorComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    JsonStringPipe,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AddAddressComponent,
    HomeComponent,
    DetailsComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    RxReactiveFormsModule,
  ],
  providers: [
    CounterService,
    JobService,
    DepartmentService,
    UserService,
    PersonService,
    LoginService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
