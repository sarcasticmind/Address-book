import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from './Models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public isCreate :boolean
  public name : string
  public address : string
  public user : Person
  public users =[]
  title = 'Address Book';
  constructor( private http : HttpClient , private activeRoute : ActivatedRoute){
  }
  ngOnInit(): void {
  }

  onCreate = () => {
    this.user ={
      fName : this.name,
      address : this.address,
      photo : '',
      id  :1,
      lName: 'string',
      mobile: '01004505399',
      birthDate:new Date(),
      email: 'string',
      age: 26,
      dept_id: 1,
      job_id: 1,
    }
  }

  returnToCreate =() =>{
    this.isCreate = true
    this.name =''
    this.address =''
  }
}
