import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  NumericValueType,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';
import { Person } from 'src/app/Models/person';
import { DepartmentService } from 'src/app/services/department.service';
import { JobService } from 'src/app/services/job.service';
import { PersonService } from 'src/app/services/person.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css'],
})
export class AddAddressComponent implements OnInit {
  addresses: any;
  unique = false;
  addValidation: any;
  jobs: any;
  depts: any;
  contractErrorMsg = '';
  constructor(
    public addService: PersonService,
    private route: Router,
    public jobService: JobService,
    public deptService: DepartmentService
  ) {
    this.addValidation = new FormGroup({
      fName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        RxwebValidators.pattern({
          expression: { 'invalid name': /^[A-Za-z]+$/ },
        }),
      ]),
      lName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        RxwebValidators.pattern({
          expression: { 'invalid name': /^[A-Za-z]+$/ },
        }),
      ]),
      job: new FormControl('', [Validators.required]),
      dept: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        RxwebValidators.email({ message: 'Please enter valid email' }),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        RxwebValidators.pattern({
          expression: { invalid: /^01[0|1|2|5][0-9]{8}$/ },
        }),
      ]),
      birthDate: new FormControl('', [
        Validators.required,
        RxwebValidators.minDate({ value: '1960-01-01', allowISODate: true }),
      ]),
      age: new FormControl('', [
        Validators.required,
        RxwebValidators.numeric({
          message: 'not a valid number',
          allowDecimal: true,
          acceptValue: NumericValueType.Both,
        }),
        Validators.min(18),
      ]),
      photo: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.addService.getPeople().subscribe((res) => (this.addresses = res));
    this.jobService.getJobs().subscribe((res) => (this.jobs = res));
    this.deptService.getDepts().subscribe((res) => (this.depts = res));
  }

  onSubmit() {
    this.checkPhone();
    this.checkEmail();
    if (this.addService.formData.id == 0) {
      if (this.uniquePhone && this.uniqueEmail) this.addPerson();
    } else {
      this.editPerson();
    }
  }

  uniquePhone = false;
  phoneErrorMsg = '';
  checkPhone() {
    for (let i = 0; i < this.addresses.length; i++) {
      //check for if the mobile phone already exists
      if (this.addValidation.value.mobile == this.addresses[i].mobile) {
        this.uniquePhone = false;
        this.phoneErrorMsg = 'error : phone used before';
        break;
      } else this.uniquePhone = true;
    }
  }
  uniqueEmail = false;
  mailErrorMsg = '';
  checkEmail() {
    for (let i = 0; i < this.addresses.length; i++) {
      //check for if the mobile phone already exists
      if (this.addValidation.value.email == this.addresses[i].email) {
        this.uniqueEmail = false;
        this.mailErrorMsg = 'error : email used before';
        break;
      } else this.uniqueEmail = true;
    }
  }
  addPerson() {
    this.addService.postPerson().subscribe((res) => {
      Swal.fire('Added', 'The address has been added successfully', 'success');
      this.route.navigate(['/home']);
      this.resetForm();
    });
  }

  editPerson() {
    this.addService.putPerson().subscribe((res) => {
      Swal.fire(
        'Done',
        'This Address has been edited  successfully',
        'success'
      );
      this.route.navigate(['/home']);
      this.resetForm();
    });
  }
  resetForm() {
    this.addService.formData = new Person();
  }


  public isCreate :boolean
  public name : string
  public address : string
  public user : Person
  public users =[]
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
