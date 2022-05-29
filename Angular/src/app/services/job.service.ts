import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Job } from '../Models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  formData : Job;
  constructor(private http : HttpClient) { }

  getJobs(){
    return this.http.get(`${environment.baseUrl}/jobs`)
  }

  getJob(id : number){
    return this.http.get(`${environment.baseUrl}/jobs/${id}`)
  }
  putJob(){
    return this.http.put(
      `${environment.baseUrl}/jobs/${this.formData.id}`
      , this.formData
    )
  }

  postJob(){
    return this.http.post(`${environment.baseUrl}/jobs`
    , this.formData
    )
  }
  deleteJob(id : number){
    return this.http.delete(`${environment.baseUrl}/jobs/${id}`)
  }
}
