import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/Models/person';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
person :any
id:any;
  constructor(    public myservices: PersonService,
    public _activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.myservices.getPerson(this.id).subscribe(
      res => this.person = res
    )
  }

  getData(selected : Person)
  {
    this.myservices.formData = selected;
  }

}
