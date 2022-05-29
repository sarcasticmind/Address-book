import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Person } from '../Models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  formData : Person = new Person();
  constructor(private http : HttpClient) { }

  getPeople(){
    return this.http.get(`${environment.baseUrl}/people`)
  }

  getPerson(id : number){
    return this.http.get(`${environment.baseUrl}/people/${id}`)
  }
  putPerson(){
    return this.http.put(
      `${environment.baseUrl}/people/${this.formData.id}`
      , this.formData
    )
  }

  postPerson(){
    return this.http.post(`${environment.baseUrl}/people`
    , this.formData
    )
  }
  deletePerson(id : number){
    return this.http.delete(`${environment.baseUrl}/people/${id}`)
  }
}
