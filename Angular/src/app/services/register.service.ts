import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {UserRegister} from '../Models/user'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  formData : UserRegister;
  constructor(private http : HttpClient) { }

  postRegister(){
    return this.http.post(`${environment.baseUrl}/Auth/Register` , this.formData)
  }

  // getUsers(){
  //   return this.http.get(`${environment.baseUrl}/Auth/Register`)
  // }
}
