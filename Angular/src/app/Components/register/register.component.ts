import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regValidation : any;
  constructor(public regService : RegisterService , private route : Router) {
    this.regValidation = new FormGroup({
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
      email: new FormControl('', [
        Validators.required,
        RxwebValidators.email({ message: 'Please enter valid email' }),
      ]),
      password: new FormControl('', [
        Validators.required,
        RxwebValidators.email({ message: 'Please enter valid email' }),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        RxwebValidators.compare({fieldName :'confirmPassword'})
      ]),
    });
  }
users:any;
  ngOnInit(): void {
    // this.regService.getUsers().subscribe(res => {
    //   this.users = res
    // })
  }
//   onSubmit() {
//     if (this.addService.formData.id == 0) {
// this.addPerson();
//     }
//   }
  register()
  {
    this.regService.postRegister().subscribe((res) => {
      // Swal.fire('Added', 'The address has been added successfully', 'success');
      this.route.navigate(['/home']);
      // this.resetForm();
    });
  }
}
