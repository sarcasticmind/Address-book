import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email : new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
    ]),
  })
  constructor(public loginService : LoginService , private route :Router) { }

  ngOnInit(): void {
  }

  submitForm()
  {
    if(this.form.invalid) return;
    this.loginService.postRegister(this.form.get('email')?.value , this.form.get('passwoed')?.value)
    .subscribe(
      res => {this.route.navigate(['/home']);
                console.log(res);
    }
    )
  }
}
