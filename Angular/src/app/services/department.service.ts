import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dept } from '../Models/dept';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  formData : Dept;
  constructor(private http : HttpClient) { }

  getDepts(){
    return this.http.get(`${environment.baseUrl}/Departments`)
  }

  getDept(id : number){
    return this.http.get(`${environment.baseUrl}/Departments/${id}`)
  }
  putDept(){
    return this.http.put(
      `${environment.baseUrl}/Departments/${this.formData.id}`
      , this.formData
    )
  }

  postDept(){
    return this.http.post(`${environment.baseUrl}/Departments`
    , this.formData
    )
  }
  deleteDept(id : number){
    return this.http.delete(`${environment.baseUrl}/Departments/${id}`)
  }
}
