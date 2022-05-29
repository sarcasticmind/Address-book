import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  formData : UserLogin;
  username:string;
  password:string;
  constructor(private http : HttpClient) { }

  postRegister(username : any , password : any){
    return this.http.post(`${environment.baseUrl}/Auth/login` , this.formData)
  }
}
