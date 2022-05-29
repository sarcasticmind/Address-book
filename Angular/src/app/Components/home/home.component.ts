import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person';
import { PersonService } from 'src/app/services/person.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
addresses :any;
  constructor(private addService : PersonService) { }

  ngOnInit(): void {

    this.addService.getPeople().subscribe(res => this.addresses = res);
  }
  delete(id: number) {
    Swal.fire({
      title: 'Remove this person?',
      text: 'This person will be removed forever ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, I am sure',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      console.log(result);
      if (result.value) {
        this.addService.deletePerson(id).subscribe(
          (res) => {
            window.location.reload();
          }
        );
        Swal.fire('Deleted', 'The Person has been deleted', 'success');
      }
    });
  }

  getData(selected: Person) {
    this.addService.formData = selected;
  }
}
