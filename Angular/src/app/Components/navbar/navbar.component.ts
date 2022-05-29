import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private route : Router) {}
  logged =true
  ngOnInit(): void {}
  clear(e: any) {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, I am sure',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Logged out', 'Please, login again to continue', 'success');
        localStorage.setItem('counter', '0');
        this.route.navigate(['/']);
        this.logged = false;
        e.target.style.display = 'none';
      }
    });
  }
}
